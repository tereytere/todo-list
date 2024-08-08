import React, { useState } from 'react';

export default function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue) {
            const newTask = {
                id: tasks.length,
                name: inputValue,
            };

            setTasks([...tasks, newTask]);

            setInputValue('');
        }
    };

    const handleBorrar = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    };

    const handleDelete = () => {
        const updatedTasks = tasks.slice(0, -1);
        setTasks(updatedTasks);
    };

    const listItems = tasks.map(task =>
        <li key={task.id}>
            {task.name} <button onClick={() => handleBorrar(task.id)}>Borrar</button>
        </li>
    );

    return (
        <div>
            <input type='text' value={inputValue} onChange={handleChange} />
            <input type='submit' value={'Añadir'} onClick={handleClick} />
            <ul>{listItems}</ul>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
}
