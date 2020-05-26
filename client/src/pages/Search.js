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
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            }
            else {
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
        // console.log(res)
        // setBooks({ result: res.data })})
        // .then(
        //     console.log(books)
        //     )
        // .catch(err => console.log(err));
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

            {console.log(bookSet)}
           {/* { books.map(book =>(
            console.log(book.id)
        ))} */}
<BookResults
book={bookSet}
/>
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