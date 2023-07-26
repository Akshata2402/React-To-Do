import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDo({ task, deleteTodo }) {
  const [done, setDone] = useState(false);
  const handleDone = () => {
    if (done === false) {
      setDone(true);
    console.log("handled");
    }else{
        setDone(false)
    console.log("not handled");

    }
  };
  return (
    <div className="todo">
      <p className={`${done ? 'completed' : ""}`} onClick={() => handleDone()}>{task.task}</p>
      
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  );
}

export default ToDo;
