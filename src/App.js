import React from "react";
import "./style.css";


import{
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./Navbar"; 
export default function App() {
  return (
   
    <Router>
       <h1>Mi portofolio</h1>
    <br/>
    <p>Iván Nahuel Barcia Golato</p>
    Mirá el menú para conocer mas acerca de m trayectoria en la especialidad, particularmente en la materia Estructura y Funcionamiento de Sistemas Informáticos. 
      <div className="container mt-5">
      <div className="btn-group">
        <NavLink to="/Layout" className="btn btn-dark">
         
          </NavLink>
         
        </div>

        <Switch>
          <Route path="/Layout" exact>
            <Layout/>
            </Route>
           
          </Switch>
        </div>
      </Router>
  );
}
