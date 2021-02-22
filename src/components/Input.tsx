import React, { ChangeEvent, KeyboardEvent } from 'react';

type InputProps = {
    id: string;
    label?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
};

function Input({id, label = '', value = '', onChange, onKeyUp = () => {}}: InputProps) {
    return <>
        <label htmlFor={id}>{ label }</label>
        <input 
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}/>
    </>;
}

export default Input;