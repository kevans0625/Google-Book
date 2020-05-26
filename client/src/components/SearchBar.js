import React from "react"

export function Input(props){
 return (
     
     <div className=" form-group bg-white flex items-center rounded-full shadow-xl">
    <input className="form-control rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" 
    type="text" placeholder="Search"  {...props}/>
        </div>
        );
        }
  

export function SearchButton(props){
    return (
                
    <div className="container">
      <button className=" form-control bg-gray-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 
      flex items-center justify-center" {...props}>
        ->
      </button>
      </div>

        )
        }
    
   