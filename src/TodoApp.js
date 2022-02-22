import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
    return (<div>
        <TodoForm data-testid='helloworld' />
        <TodoList todos={[]}/>
    </div>);
};
export default TodoApp;