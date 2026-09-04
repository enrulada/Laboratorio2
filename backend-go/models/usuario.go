package models

// Usuario refleja la tabla USUARIOS de la base de datos.
type Usuario struct {
	IDUsuario      int    `json:"id_usuario"`
	Nombre         string `json:"nombre"`
	Apellido       string `json:"apellido"`
	Email          string `json:"email"`
	ContrasenaHash string `json:"-"` // nunca se serializa en la respuesta JSON
	IDRol          int    `json:"id_rol"`
	Activo         bool   `json:"activo"`
}

// LoginRequest es lo que la app envía al hacer login.
type LoginRequest struct {
	Email      string `json:"email"`
	Contrasena string `json:"contrasena"`
}

// LoginResponse es lo que el backend devuelve si el login es exitoso.
type LoginResponse struct {
	Token   string  `json:"token"`
	Usuario Usuario `json:"usuario"`
}

// ErrorResponse estandariza el formato de error para el frontend.
type ErrorResponse struct {
	Mensaje string `json:"mensaje"`
}