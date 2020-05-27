import React, { useEffect, useState } from "react";
import { Input, SearchButton }  from "../components/SearchBar";
// import BookResults from "../components/BookSearchCard";
import API from "../utils/API";
import {List, ListItem} from "../components/BookSearchCard";

function Search(){
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
        search: "",
        results: [],
        error: ""
    })

    
const loadBooks = query => {
        console.log(query)
        API.searchBook()
        .then(res =>{
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            }
            else {
                console.log(res)
                // store response in a array
                let results = res.data.items
                //map through the array 
                results = results.map(result => {
                    //store each book information in a new object 
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                setBooks({ results: results, error: "" })
            }
        })
        .catch(err => setBooks({ error: err.items }));

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

    let bookSet = books.results
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
            {/* <BookResults/> */}
            {console.log(bookSet)}
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
          )})
{/* {books.map(book => (
               console.log(book.title)
                  
                ))}
              */}
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