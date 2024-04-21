package routes

import (
	"waasabico/controllers"

	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo) {
	e.GET("/posts", controllers.GetPosts)
}
