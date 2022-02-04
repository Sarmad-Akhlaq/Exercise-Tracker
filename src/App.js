import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <br/>
      <Routes>
            <Route path={"/edit/:id"} element={<EditExercise/>} />
            <Route path={"/create"} element={<CreateExercise/>} />
            <Route path={"/user"} element={<CreateUser/>} />
            <Route path={"/"} element={<ExercisesList/>} exact />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
