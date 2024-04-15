To run the application, execute the following command in your terminal:


node index.js

This will start the server on port 3000. You can then use a tool like Postman or cURL to test the various CRUD operations:

GET http://localhost:3000/api/books to retrieve all books

POST http://localhost:3000/api/books with a JSON body like { "title": "New Book", "author": "New Author" } to create a new book

PUT http://localhost:3000/api/books/1 with a JSON body like { "title": "Updated Book", "author": "Updated Author" } to update an existing book

DELETE http://localhost:3000/api/books/1 to delete a book
