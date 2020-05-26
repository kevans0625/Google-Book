import React, { useEffect, useState } from "react";
import { Input, SearchButton }  from "../components/SearchBar";
import BookResults from "../components/BookSearchCard";
import API from "../utils/API";

function Search(){
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
        search: "",
        results: [],
        error: ""
    })

    // useEffect(() => {
    //     loadBooks()
    //   }, [])
    
const loadBooks = query => {
        console.log(query)
        API.searchBook()
        .then(res =>{
        console.log(res)
        setBooks({ result: res.data })})
        .then(
            console.log(books)
            )
        .catch(err => console.log(err));
      };

    const handleInputChange = event =>{
        const {name, value} = event.target
        setFormObject({...formObject, [name]: value})
    }
    
    const handleFormSubmit = event =>{
        event.preventDefault();
            console.log(formObject.search)
            loadBooks(formObject.search)
    }

    return(  
    <div>
        <form>
        <Input
            name="search" 
            onChange={handleInputChange}
        />
        <SearchButton 
        onClick={handleFormSubmit}/>
        </form>
            <br/>
            <div className="text-gray-900 font-bold text-xl mb-2">RESULTS</div>
            <br/>
            {console.log(books.result)}
           {/* { books.map(book =>(
            console.log(book.title)
        ))} */}

{books.map(book => (
               console.log(book.title)
                  
                ))}
             
            {/* {books.length ? (
        <BookResults/>
        books.map(book =>(
            book.title
        ))
                //image 
                //author 
                ///title 
                //description 

        ))}

      ) : ( 
            <h3>No Results to Display</h3>
            )}  */}
        </div>
      );
}
export default Search;