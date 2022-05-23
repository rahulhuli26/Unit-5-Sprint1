import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react";
import { v4 as uuid } from 'uuid';

const AddTask = ({addFun}) => {
  // NOTE: do not delete `data-cy` key value pair;
  const [query, setQuery] = useState({
    "id": uuid(),
    "text": "",
    "done": false,
    "count": 1
  });

 

  return (
    <div className={styles.addTask}>
      <input  data-cy="add-task-input" type="text" placeholder="Add task..." onChange={(e) => {setQuery({
        ...query,
        text: e.target.value,
      })}}/>
      <button data-cy="add-task-button" className={styles.add} disabled={query.length < 1} onClick={() => {addFun(query)}}>+</button>
    </div>
  );
};

export default AddTask;
