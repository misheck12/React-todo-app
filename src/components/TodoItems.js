import React, { useState, useEffect } from "react";
import styles from './TodoItem.module.css'
const TodoItems = (props) => {
  const [editing, setEditing] = useState(false);

  const handlesEditing = () => {
    setEditing(false)
  }

  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  useEffect(() => {
    return () => {
      console.log("cleaning up")
    }
  }, [])


  const completedStyle = {
    fontSize: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration:"line-through"
  }

  const { completed, id, title } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <li className={styles.item}>
      <div onClick={handlesEditing} style={viewMode}>
        <input type="checkbox"className={styles.checkbox} checked={completed} onChange={() => props.handleChangeProps(id)} />
        <button onClick={() => props.checkDel(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
          </span>
      </div>
      <input type="text" style={editMode} className={styles.textInput} value={title} onChange={e => {
        this.props.setUpdate(e.target.value, id)
      }} onKeyDown={handleUpdateDone}/>
    </li>
  )
}

export default TodoItems