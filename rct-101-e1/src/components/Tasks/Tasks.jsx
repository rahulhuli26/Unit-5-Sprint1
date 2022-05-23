import React from "react";
import styles from "./tasks.module.css";
// import data from "../../data/tasks.json"
import { useState } from "react";
import Task from "../Task/Task"
import Counter from "../Counter/Counter"

const Tasks = ({data, setLists}) => {
  // NOTE: do not delete `data-cy` key value pair;


  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((e) => (
          <Task key={e.id} props={e} list={data} setLists={setLists}/>
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
