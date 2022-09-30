import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/page/home/home'
import reportWebVitals from './reportWebVitals';
import Form from './page/formulario/form';
import Dashboard from './page/Dashboard/dash';
import Registrar from './page/FRegistrar/registrar';
import Calificacion from "./components/calificacion/calificacion";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/inicio" element={<Form/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/registrar" element={<Registrar/>} />
    </Routes>
    </BrowserRouter> 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
