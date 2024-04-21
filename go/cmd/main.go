package main

import (
	"log"
	"net/http"
	"waasabico/config"
	"waasabico/models"
	"waasabico/routes"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func main() {
	// Load env
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// Init Echo
	e := echo.New()

	// Connect db.
	config.InitDatabase()
	defer config.GetDatabase().DB()

	// Migrations with AutoMigrate
	db := config.GetDatabase()
	err := db.AutoMigrate(&models.Post{}, &models.User{})
	if err != nil {
		panic(err)
	}

	// Setup routes
	routes.SetupRoutes(e)

	// Start server
	e.Logger.Fatal(e.Start(":3001"))
}

func getPosts(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{"message": "Hello"})
}
