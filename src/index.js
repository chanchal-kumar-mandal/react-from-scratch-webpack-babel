import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [theme, setTheme] = useState('light');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        applyThemeStyles();
    }, [theme]);

    const applyThemeStyles = () => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.style.setProperty('--main-bg-color', '#f8f8f8');
            root.style.setProperty('--main-text-color', '#333');
            root.style.setProperty('--input-bg-color', '#fff');
        } else {
            root.style.setProperty('--main-bg-color', '#333');
            root.style.setProperty('--main-text-color', '#f8f8f8');
            root.style.setProperty('--input-bg-color', '#444');
        }
    };

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
            setError('');
        } else {
            setError('Todo text cannot be empty!');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEdit = (id, text) => {
        setEditingTodoId(id);
        setEditingText(text);
        setError('');
    };

    const saveEdit = (id) => {
        if (editingText.trim() !== '') {
            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, text: editingText } : todo
            ));
            setEditingTodoId(null);
            setEditingText('');
            setError('');
        } else {
            setError('Todo text cannot be empty!');
        }
    };

    const cancelEdit = () => {
        setEditingTodoId(null);
        setEditingText('');
        setError('');
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const changeBackgroundImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const componentStyles = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'var(--main-bg-color)',
        color: 'var(--main-text-color)',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        minHeight: '400px',
        position: 'relative',
    };

    const headerStyles = {
        textAlign: 'center',
        color: 'var(--main-text-color)',
    };

    const inputContainerStyles = {
        display: 'flex',
        marginBottom: '20px',
    };

    const inputStyles = {
        flex: 1,
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        color: 'var(--main-text-color)',
        backgroundColor: 'var(--input-bg-color)',
    };

    const addButtonStyles = {
        padding: '10px 15px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
    };

    const todoItemStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderColor: 'var(--main-text-color)', // Consider a more specific border color if needed
        color: 'var(--main-text-color)',
    };

    const todoTextStyles = (completed) => ({
        textDecoration: completed ? 'line-through' : 'none',
        flex: 1,
        cursor: 'pointer',
    });

    const editInputStyles = {
        flex: 1,
        padding: '5px',
        fontSize: '16px',
        color: 'var(--main-text-color)',
        backgroundColor: 'var(--input-bg-color)',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const editButtonStyles = {
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '4px',
        marginRight: '5px',
    };

    const cancelButtonStyles = {
        backgroundColor: '#ccc',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '4px',
    };

    const deleteButtonStyles = {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '4px',
    };

    const editButtonStyle = {
        backgroundColor: '#ff9800',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '4px',
        marginRight: '5px',
    };

    const themeButtonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        color: 'var(--main-text-color)',
    };

    const backgroundImageLabelStyles = {
        cursor: 'pointer',
        marginRight: '10px',
    };

    return (
        <div style={componentStyles}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', alignItems: 'center' }}>
                <label htmlFor="bg-image-input" style={backgroundImageLabelStyles}>
                    Change BG
                </label>
                <input type="file" id="bg-image-input" accept="image/*" onChange={changeBackgroundImage} style={{ display: 'none' }} />

                <button onClick={toggleTheme} style={themeButtonStyle}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
            <h2 style={headerStyles}>React from Scratch with Webpack and Babel</h2>
            <h3 style={headerStyles}>My Todo List</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={inputContainerStyles}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={inputStyles}
                    placeholder="Enter todo..."
                />
                <button onClick={addTodo} style={addButtonStyles}>
                    Add
                </button>
            </div>
            <div>
                {todos.map(todo => (
                    <div key={todo.id} style={todoItemStyles}>
                        {editingTodoId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => {
                                        setEditingText(e.target.value);
                                        setError(e.target.value.trim() === '' ? 'Todo text cannot be empty!' : '');
                                    }}
                                    onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(todo.id); }}
                                    style={editInputStyles}
                                />
                                <button onClick={() => saveEdit(todo.id)} style={editButtonStyles}>Save</button>
                                <button onClick={cancelEdit} style={cancelButtonStyles}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <label onClick={() => toggleTodo(todo.id)} style={todoTextStyles(todo.completed)}>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        readOnly
                                        style={{ marginRight: '10px' }}
                                    />
                                    {todo.text}
                                </label>
                                <div>
                                    <button onClick={() => startEdit(todo.id, todo.text)} style={editButtonStyle}>Edit</button>
                                    <button onClick={() => deleteTodo(todo.id)} style={deleteButtonStyles}>Delete</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoList />);