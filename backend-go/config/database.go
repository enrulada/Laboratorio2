package config

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

// DB es la conexión global a la base de datos, reutilizada por todos los handlers.
var DB *sql.DB

// ConectarDB abre la conexión con MySQL usando las variables de entorno.
func ConectarDB() {
	usuario := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	puerto := os.Getenv("DB_PORT")
	nombreDB := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true",
		usuario, password, host, puerto, nombreDB)

	var err error
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatalf("Error al abrir la conexión con MySQL: %v", err)
	}

	if err = DB.Ping(); err != nil {
		log.Fatalf("No se pudo conectar a la base de datos: %v", err)
	}

	log.Println("Conexión a MySQL establecida correctamente.")
}