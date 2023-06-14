import React from 'react';

interface TodoListPropos {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListPropos> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
