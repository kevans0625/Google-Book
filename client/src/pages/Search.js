import React from "react";
import SearchBar from "../components/SearchBar";
import BookResults from "../components/BookSearchCard";

function Search(){

    return(  
    <div>
     <SearchBar/>
   <br/>
   <div className="text-gray-900 font-bold text-xl mb-2">RESULTS</div>
   <br/>
   <BookResults/>
      </div>
 
      );

}
export default Search;