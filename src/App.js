import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import axios from "axios";

import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import Tabs from "./components/Tabs";

 import listTaskIcon from "../node_modules/bootstrap-icons/icons/list-task.svg";
import listTaskCompletedIcon from "../node_modules/bootstrap-icons/icons/calendar-check.svg";
 
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodos(res.data));
  }, []);

  // Toggle complete Todo
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // Delete Todo
  const delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos([...todos.filter((todo) => todo.id !== id)]));
  };

  // Add Todo
  const addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", 
      {
        title,
        completed: false,
      })
      .then((res) => setTodos([...todos, res.data]));
  };

  return (
    <Router>
      <div className="App">
        <React.Fragment>
          <Header />
          <div className="container">
            <AddTodo addTodo={addTodo} />
            <Tabs>
              <div label="All" icon={listTaskIcon}>
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </div>
              <div label="Completed" icon={listTaskCompletedIcon}>
                
                <Todos
                  todos={todos.filter((todo) => todo.completed)}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </div>
            </Tabs>
          </div>
        </React.Fragment>
      </div>
    </Router>
  );
};

export default App;