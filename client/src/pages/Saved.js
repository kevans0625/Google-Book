import React, { useEffect, useState } from "react";

import API from "../utils/API";
// import SavedResults from "../components/SavedCard"
import {List, ListItem} from "../components/BookSearchCard";

function Saved(){

  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
       { console.log(res)
        setBooks(res.data)}
      )
      .catch(err => console.log(err));
  };

  let bookSet = books.results
 return (
     <div>
     <br/>
   <div className="text-gray-900 font-bold text-xl mb-2">SAVED BOOKS</div>
   <br/>
   {bookSet ? (
                  <List>
                {bookSet.map(book =>(
             <ListItem key={book.id}>
               {/* <Link to={"/books/" + book._id}> */}
                 <strong>
                   {book.title} by {book.author}
                 </strong>
               {/* </Link> */}
               {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
             </ListItem>
           ))}
         </List>
           ) : (
            <h3>No Results to Display</h3>
          )}
     </div>
 );
}
export default Saved;