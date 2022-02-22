import React from 'react'
import { render } from '@testing-library/react'
import TodoApp from './TodoApp'

describe('<TodoApp/>', ()=> {
    it('renders TodoFrom and TodoList', ()=>{
        const {getByText, getByTestId} = render(<TodoApp/>);
        getByText('등록');
        getByTestId('TodoList');
    });
});