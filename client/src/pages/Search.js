import React, { useEffect, useState } from "react";
import {SaveBtn, ViewBtn} from "../components/btn";
import { Input, SearchButton }  from "../components/SearchBar";
// import {BookResults} from "../components/BookSearchCard";
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

        // Saves a book to the database with a given id, then reloads books from the db
  function saveBook(id) {
    API.saveBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

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
      <div className="container"  >
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

      </div>
            {bookSet ? (
           <div className="container">
                
                {bookSet.map(book =>(


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
    <footer className="blockquote-footer">By: <cite title="Source Title">{book.author}</cite></footer>
    <p className="card-text">{book.description}</p>
  </div>
    <SaveBtn onClick={() => saveBook(book.id)} />
    <ViewBtn href={book.link}/>
</div>
</div>
</div>


))}

{/* <div className="max-w-sm w-full lg:max-w-full lg:flex" key={book.id}>
<img className="image-div h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  
src={book.image} alt="Avatar of Jonathan Reinink"/>
    
<div className= "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
<div className="mb-8">
<button className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex border border-gray-400 rounded shadow">
<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 
0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
      </svg>
<span>Save</span>
</button>
<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
<span>View</span>
</button>
<div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
<p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
</div>
<div className="flex items-center">
<img className="w-10 h-10 rounded-full mr-4" src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avatar of Jonathan Reinink"/>
<div className="text-sm">
<p className="text-gray-900 leading-none">{...props}</p>
//   //       </div>
//   //     </div>
//   //   </div>
//   // </div> */}
          </div>
        
          ) : (
            <h3>No Results to Display</h3>
          )}
          {/* <BookResults/> */}
        </div>
      );
}
export default Search;