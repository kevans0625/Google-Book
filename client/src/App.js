import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


function App() {
  return (
      <Router>
    <div className="App">
      <Header/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </div>
    </Router>
  );
}


export default App;
