import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header.js";
import { Footer } from "./MyComponents/Footer.js";
import { Todos } from "./MyComponents/Todos.js";
import { Add } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Link,
  Route,
  Router,
  Routes,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    // deleting this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    // let sno;
    // if(todos.length=0){
    //   sno = 0;
    // }
    // else{
    //   sno = todos[todos.length-1].sno+1;
    // }
    const mytodo = {
      // sno:sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <BrowserRouter>
    <Header title="My Todo List" searchbar={true} />

      {/* here in above line if you enter searchbar={false} searchbar will not be displaed in header */}
      {/* here we pass some values or objects from app.js to subparts of our website */}
      <Add addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Routes>
      {/* I WAS ABOUT TO TRY THS BUT DID NOT KNEW HOW TO ADD MORE THAN ONE ROUTES */}
      {/* <Route path="/">
        <Route exact path="" element={<Add addTodo={addTodo}/>}/>
        <Route exact path="" element={<Todos todos={todos} onDelete={onDelete}/>}/>
      </Route> */}
      <Route exact path="/about" element={<About/>} />
      </Routes>


      {/* <Route exact path="/" element={<Add addTodo={addTodo}/>}/> */}
      {/* <Route exact path="/" element={<Todos todos={todos} onDelete={onDelete}/>}/> */}
      {/* <Add addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} /> */}
      {/* <Todos todos={todos} onDelete={onDelete}/> */}
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
