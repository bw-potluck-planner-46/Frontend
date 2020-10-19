import React, { useReducer } from 'react';

const Register = () => {
    return (
        <form>
            <label htmlFor='username'>Username:</label>
            <input 
                id='username' 
                name='username' 
                type='text' 
                placeholder='Username'
                value={user.name}
                onChange={changeHandler}
            />

            <label htmlFor='email'>Email:</label>
            <input 
                id='email'
                name='email'
                type='email'
                placeholder='Email'
                value={user.email}
                onChange={changeHandler}
            />

            <label htmlFor='password'>Password:</label>
            <input 
                id='password'
                name='password'
                type='text'
                placeholder='Password'
                value={user.password}
                onChange={changeHandler}
            />
            
            <input 
                id='organizer' 
                name='role' 
                type='radio' 
                value='Organizer' 
                onChange={changeHandler} 
            />
            <label htmlFor='organizer'>Organizer</label>

            <input 
                id='guest' 
                name='role' 
                type='radio' 
                value='Guest' 
                onChange={changeHandler} 
            />
            <label htmlFor='guest'>Guest</label>
        </form>
    )
}

export default Register;