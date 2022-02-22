import React from 'react';
import{fireEvent, getByPlaceholderText, render} from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    const setup = (props = {}) => {
        const utils = render(<TodoForm{...props}/>);
        const {getByText, getByPlaceholderText} = utils;
        const input = getByPlaceholderText('할 일을 입력해주세요~');
        const button = getByText('등록');
        return{...utils,input,button};
    }
    it('has input and a button', ()=> {
        const {input, button} = setup();
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
        // const{getByText, getByPlaceholderText} = render(<TodoForm/>);
        // getByPlaceholderText('할 일을 입력해주세요~'); //input 있는지 없는지
        // getByText('등록'); //button이 있는지 없는지
    })
    it('change input', ()=> {
        const {input} =setup();
        // const{getByPlaceholderText} = render(<TodoForm/>);
        // const input = getByPlaceholderText('할 일을 입력해주세요~'); //input 있는지 없는지
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    })
    it ('call onInsert and clears input',() => {
        const onInsert =jest.fn();
        const {input, button} = setup({onInsert});
        // const{getByText, getByPlaceholderText} =render(<TodoForm onInsert={onInsert}/>);
        // const input = getByPlaceholderText('할 일을 입력해주세요~');
        // const button = getByText('등록');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    })
})