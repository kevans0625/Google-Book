import React, { useEffect, useState } from "react";
import {DeleteBtn, ViewBtn} from "../components/btn";
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
       {console.log(res)
        setBooks(res.data)}
      )
      .catch(err => {
        console.log(err)});
      };
      console.log(books)

      function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }
    
 return (
     <div>
     <br/>
   <div className="text-gray-900 font-bold text-xl mb-2">SAVED BOOKS</div>
       {/* </div> */}
       <br/>
            <div className="text-gray-900 font-bold text-xl mb-2">RESULTS</div>
            <br/>
            {console.log(books)}
            {books ? (
           <div className="container">
                
                {books.map(book =>(


  <div className="card mb-3" key={book._id} >
  <div className="card-header">
  <h5 className="card-title">{book.title}</h5>
  </div>
  <div className="row no-gutters">
  <div className="col-md-4">
  <img className="card-img" src={book.image} alt="Card image cap"/>
  </div>
  <div className="col-md-8">
  <div className="card-body">
    <footer className="blockquote-footer">By: <cite title="Source Title">{book.authors}</cite></footer>
    <p className="card-text">{book.description}</p>
  </div>
    <DeleteBtn
    onClick={() => deleteBook(book._id)} 
    />
         {console.log(book._id)}
    <ViewBtn href={book.link}/>
</div>
</div>
</div>


))}


          </div>
        
          ) : (
            <h3>No Results to Display</h3>
          )}
          {/* <BookResults/> */}
        </div>
      );
}
export default Saved;