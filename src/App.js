
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";
import EditUser from "./components/EditUser"; 
const App = () => {
  //1. use variable
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
      <div className="containerFluid">
        <a className="navbarBrand" href="#">
          <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" style={{alt:"no logo" ,width:"30" ,height:"24" ,class:"d-inline-block align-text-top"}}/>
          Bootstrap
        </a>
     
      </div>
  
        </nav>
      Crud operation using react 
    <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <Link to="/">List</Link>
              <Link to="/create" style={{paddingLeft : "6px"}}>Create</Link>
              
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route index element={<ListUser/>} />
          <Route path="/" element={<ListUser/>} />
          <Route path="/create" element={<CreateUser/>} />
          <Route  path="/:id/edit" element={<CreateUser/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
