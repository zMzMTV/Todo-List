import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Task from "./components/Task";
import Form from "./components/Form";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt as farListAlt } from "@fortawesome/free-regular-svg-icons";
library.add(faTrash, faListAlt, farListAlt);

const App = () => {
  const [input, setInput] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // Stop auto-refresh
    e.preventDefault();
    if (!input) {
      alert("Veuillez rentrer une nouvelle tâche");
    } else {
      // Creation copy of the array to add it new task
      let tasksCopy = [...tasks];
      // Adding the new task the array
      tasksCopy.push({
        // If the input is more than 20 characters return only the 20 first + '...'
        title: input.length > 20 ? input.substring(0, 30) + "..." : input,
        done: false,
      });
      // Update the task state
      setTasks(tasksCopy);
      // Input reset
      setInput("");
    }
  };

  const handleClickCheck = (index) => {
    let tasksCopy = [...tasks];
    // with the index from .map() I can retrieve the task in the array
    // I modify the key "done" to false for true and to true to false
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasks(tasksCopy);
  };

  const handleClickTrash = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };
  return (
    <div className="body">
      <Header />
      <div className="container">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
        <Task
          handleClickCheck={handleClickCheck}
          handleClickTrash={handleClickTrash}
          tasks={tasks}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
