import React from "react";
import styles from "./counter.module.css";


const Counter = ({props, setLists, list}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  const [value, setvalue] = React.useState(props.count)

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => {setvalue((pre ) => (pre + 1))}}
     >+</button>
      <span data-cy="task-counter-value">{value}</span>
      <button data-cy="task-counter-decrement-button" onClick={() => {
        setvalue((pre ) => (pre - 1));
      }} disabled={value === 1}>-</button>
    </div>
  );
};

export default Counter;
