import * as React from "react"
import { TodosContext } from "../../todo-context"
import "./todo-form.scss"

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext)
  const [task, setTask] = React.useState("")

  const idGenerator = () => {
    return Date.now()
  }

  const handleAddTodo = () => {
    // Fin an ability to add new task
    const id = idGenerator()
    setTodos([...todos, { id: id, label: task, checked: false }])
    setTask("")
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
    }
  }

  const buttonClass = task ? '' : 'disabled';

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} />
      <button type="button" onClick={handleAddTodo} className={buttonClass}>
        Add task
      </button>
    </div>
  )
}
