import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  //FC stand for FunctionComponent
  const todos = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
