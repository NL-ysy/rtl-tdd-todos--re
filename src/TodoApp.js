import React, { useState, useCallback, useRef } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
    const[todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: true,
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            done: true,
        },
    ]);
    const nextId = useRef(3); //새로 추가 할 항목에서 사용할 id
    const onInsert = useCallback(
        text => {
            setTodos(
                todos.concat(
                {
                    id : nextId.current, 
                    text, 
                    done: false
                }
                ));
             nextId.current += 1;
            },
            [todos]
    );
    const onToggle =useCallback(
        id => { 
            setTodos(
            // js 에서는 같다를 === 세개로 함(메모리에 있는 값을 비교하고싶다)
            todos.map(todo => todo.id === id ? {...todo, done: !todo.done}: todo)
            );
        },[todos]
    );
    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        }, [todos]
    );
    return (<div>
        <TodoForm data-testid='helloworld' onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>);
};
export default TodoApp;