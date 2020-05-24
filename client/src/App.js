import React from "react";

import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


function App() {
  return (
    <div className="App">
      <Header/>
        <SearchBar/>
       <Saved />
        <Search />
    </div>
  );
}


export default App;
