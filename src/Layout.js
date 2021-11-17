import React from "react";
import "./style.css";
import{
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Navbar from "./Navbar"; 
export default function App() {
  return (
    <Router>
        
    <div className="container mt-5">
    <div className="btn-group">
    <Link to ="/Navbar" className="btn btn-dark">
            Ver Menu
            </Link>
    </div>
    <Route path="/Navbar" exact>
            <Navbar/>
            </Route>
    </div>
   
    
    </Router>
  );}