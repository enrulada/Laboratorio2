package utils

import (
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// GenerarToken crea un JWT firmado con los datos mínimos del usuario logueado.
func GenerarToken(idUsuario int, idRol int) (string, error) {
	secreto := []byte(os.Getenv("JWT_SECRET"))

	claims := jwt.MapClaims{
		"id_usuario": idUsuario,
		"id_rol":     idRol,
		"exp":        time.Now().Add(24 * time.Hour).Unix(), // expira en 24hs
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(secreto)
}