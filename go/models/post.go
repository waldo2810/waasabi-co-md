package models

type Post struct {
	ID       uint
	Title    string
	Content  string
	PostType string
	Link     string
	Archived bool
}
