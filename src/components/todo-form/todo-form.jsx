import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';
// import { v4 as uuidv4 } from 'uuid';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    // Fin an ability to add new task
    // const id = uuidv4()
    setTodos([ ...todos, {id: 4,label: {task}, checked: false,}])
    setTask('')
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
