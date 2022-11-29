import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  console.log('todos ', todos)
  const handleDelete = (id) => {
    // Fix an ability to delete task
    const confirmBox = window.confirm('Task will be deleted')
    
    if ( confirmBox === true ) {  
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    console.log('todos d', todos)
    } else {
      return null
    }

    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    console.log('todos d', todos)
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    const newTodos = todos.reduce((acc, todo) => {
      if (todo.id === id) {
        acc.push({ ...todo, checked: !todo.checked})
      } else {
         acc.push(todo)
      }
      return acc
    },[])
    
    setTodos(newTodos)
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };
  console.log('todos', todos)

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
