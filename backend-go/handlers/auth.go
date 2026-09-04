package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"studenhub-backend/config"
	"studenhub-backend/models"
	"studenhub-backend/utils"
)

// LoginHandler implementa la Feature "Iniciar sesión como estudiante" (RF01).
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		responderError(w, http.StatusMethodNotAllowed, "Método no permitido")
		return
	}

	var req models.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		responderError(w, http.StatusBadRequest, "Cuerpo de la petición inválido")
		return
	}

	if req.Email == "" || req.Contrasena == "" {
		responderError(w, http.StatusBadRequest, "Email y contraseña son obligatorios")
		return
	}

	// 1) Buscar el usuario por email
	var usuario models.Usuario
	query := `
		SELECT id_usuario, nombre, apellido, email, contrasena_hash, id_rol, activo
		FROM USUARIOS
		WHERE email = ?
	`
	err := config.DB.QueryRow(query, req.Email).Scan(
		&usuario.IDUsuario,
		&usuario.Nombre,
		&usuario.Apellido,
		&usuario.Email,
		&usuario.ContrasenaHash,
		&usuario.IDRol,
		&usuario.Activo,
	)

	if err == sql.ErrNoRows {
		responderError(w, http.StatusUnauthorized, "Credenciales inválidas")
		return
	}
	if err != nil {
		responderError(w, http.StatusInternalServerError, "Error interno del servidor")
		return
	}

	// 2) Verificar que el usuario esté activo
	if !usuario.Activo {
		responderError(w, http.StatusForbidden, "El usuario se encuentra inactivo")
		return
	}

	// 3) Comparar la contraseña ingresada contra el hash guardado
	err = bcrypt.CompareHashAndPassword(
		[]byte(usuario.ContrasenaHash),
		[]byte(req.Contrasena),
	)
	if err != nil {
		responderError(w, http.StatusUnauthorized, "Credenciales inválidas")
		return
	}

	// 4) Generar el token JWT
	token, err := utils.GenerarToken(usuario.IDUsuario, usuario.IDRol)
	if err != nil {
		responderError(w, http.StatusInternalServerError, "Error al generar el token")
		return
	}

	usuario.ContrasenaHash = ""

	respuesta := models.LoginResponse{
		Token:   token,
		Usuario: usuario,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(respuesta)
}

// responderError centraliza el formato de error para el frontend.
func responderError(w http.ResponseWriter, status int, mensaje string) {
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(models.ErrorResponse{Mensaje: mensaje})
}