package config

import (
	"fmt"
	"os"
	"strconv"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

type DatabaseConfig struct {
	Host         string
	Port         int
	User         string
	DatabaseName string
	Password     string
}

func BuildDatabaseConfig() *DatabaseConfig {
	config := DatabaseConfig{
		Host:         os.Getenv("DB_HOST"),
		Port:         getPort(os.Getenv("DB_PORT")),
		User:         os.Getenv("DB_USER"),
		DatabaseName: os.Getenv("DB_NAME"),
		Password:     os.Getenv("DB_PASSWORD"),
	}
	return &config
}

func GetDatabaseUrl(config *DatabaseConfig) string {
	return fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d",
		config.Host,
		config.User,
		config.Password,
		config.DatabaseName,
		config.Port,
	)
}

func InitDatabase() {
	config := BuildDatabaseConfig()
	url := GetDatabaseUrl(config)
	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
	DB = db
}

func GetDatabase() *gorm.DB {
	return DB
}

func getPort(s string) int {
	i, err := strconv.Atoi(s)
	if err != nil {
		panic(err)
	}
	return i
}
