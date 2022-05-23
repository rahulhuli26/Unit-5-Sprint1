import React from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import {useState} from "react";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"

import styles from "./taskApp.module.css";
import data from ".././data/tasks.json"

const TaskApp = () => {
  const [lists, setLists] = useState(data);

  const addItem = (value) => {
    setLists([
      ...lists,
      value
    ])
  };


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask addFun={addItem}/>
      {/* Tasks */}
      <Tasks data ={lists}  setLists={setLists}/>
    </div>
  );
};

export default TaskApp;
