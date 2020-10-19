import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().required('Please enter a username').min(5, 'Must have at least 4 characters').max(15, 'May not be longer than 15 characters'),
    email: yup.string().email('Please enter a valid email').required('Please enter a valid email'),
    password: yup.string().required('Password is required'),
    role: yup.string().required('Please select Organizer or Guest')
})

const Register = () => {

    const [user, setUser] = useState(
        {
            username: '',
            email: '',
            password: '',
            role: ''
        }
    );

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(user).then(valid => setDisabled(!valid))
    }, [user]);

    const changeHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    return (
        <form>
            <label htmlFor='username'>Username:</label>
            <input 
                id='username' 
                name='username' 
                type='text' 
                placeholder='Username'
                value={user.username}
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

            <button type='submit' disabled={disabled}>Submit</button>
        </form>
    );
};

export default Register;