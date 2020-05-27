import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// https://www.google.com/books/feeds/volumes?q=e

export default {

//   * `/api/books` (get) - Should return all saved books as JSON.
getBooks: function() {
  return axios.get("/api/books");
},
// Saves a book to the database
// * `/api/books` (post) - Will be used to save a new book to the database.
saveBook: function(bookData) {
  return axios.post("/api/books", bookData);
},
// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
// the given id
deleteBook: function(id) {
  return axios.delete("/api/books/" + id);
},


  // Saves a book to the database
  searchBook: function(query) {
    return axios.get(BASEURL + query);
  
  }
};
