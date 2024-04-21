package controllers

import (
	"net/http"
	"waasabico/config"
	"waasabico/models"

	"github.com/labstack/echo/v4"
)

func GetPosts(c echo.Context) error {
	db := config.GetDatabase()

	var posts []*models.Post

	if err := db.Find(&posts); err.Error != nil {
		data := map[string]interface{}{
			"message": err.Error.Error(),
		}
		return c.JSON(http.StatusOK, data)
	}

	return c.JSON(http.StatusOK, posts)
}
