import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="list-group-item">
  <a href="#" class="list-group-item active">ACADEMIA </a> <button type="button" class="btn btn-default">
  </button>
  <a href="#" className="list-group-item" >Asignatura<button type="button" className="float-right btn-success ">   + AÑADIR</button>
   <button type="button" class="float-right">  MODIFICAR</button>  </a> 

  <a href="#" className=" list-group-item">Docente  <button type="button" className="float-right  btn-success">+ AÑADIR</button>
   <button type="button"  class="float-right">  MODIFICAR</button></a>

  <a href="#" className=" list-group-item">Estudiante  <button type="button" className="float-right btn-success">+ AÑADIR</button>
   <button type="button" class="float-right">MODIFICAR</button></a>

  <a href="#" className="list-group-item">Curso  <button type="button" className="float-right  btn-success">+ AÑADIR</button>
   <button type="button" class="float-right">MODIFICAR</button></a>


</div> 

    </div>
  );
}

export default App;
