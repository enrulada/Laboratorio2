package main

import (
	"log"
	"net/http"
	"os"

	"studenhub-backend/config"
	"studenhub-backend/handlers"
)

// middlewareCORS permite que la app de Expo pueda hacer requests a esta API.
func middlewareCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}
		next(w, r)
	}
}

func main() {
	config.ConectarDB()
	defer config.DB.Close()

	mux := http.NewServeMux()
	mux.HandleFunc("/api/auth/login", middlewareCORS(handlers.LoginHandler))

	puerto := os.Getenv("SERVER_PORT")
	if puerto == "" {
		puerto = "8080"
	}

	log.Printf("Servidor corriendo en http://localhost:%s\n", puerto)
	log.Fatal(http.ListenAndServe(":"+puerto, mux))
}