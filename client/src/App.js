import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


function App() {
  return (
      <Router>
    <div className="App">
      <Header/>
      <SearchBar/>
      <Route exact path="/" component={Search} />
      <Route exact path="/about" component={Saved} />
    </div>
    </Router>
  );
}


export default App;
