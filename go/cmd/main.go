package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/posts", getPosts)
	e.Logger.Fatal(e.Start(":3001"))
}

func getPosts(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{"message": "Hello"})
}
