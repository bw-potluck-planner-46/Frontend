
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components'

const StyledFormContainer = styled.form`
    display: flex;
    justify-content: center;
`

const StyledForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledLabel = styled.label`
    margin-bottom: 2%;
`

const StyledInput = styled.input`
    width: 50%;
    height: 3.5vh;
    padding: 0 1.75%;
    border: 1px solid grey;
    border-radius: 50px;
    outline: none;
    font-size: 1rem;
    margin-bottom: 2%;
`

const StyledButton = styled.button`
    margin-top: 2%;
    font-size: 1rem;
    width: 10%;
    height: 3vh;
    background-color: #867EBA;
    border: none;
    border-radius: 50px;
    outline: none;
    &:hover{
        cursor: pointer;
    }
`

const formSchema = yup.object().shape({
    username: yup.string().required('Please enter a username').min(5, 'Must have at least 5 characters').max(15, 'May not be longer than 15 characters'),
    email: yup.string().email('Please enter a valid email').required('Please enter a valid email'),
    password: yup.string().required('Password is required').min(5, 'Must have at least 5 characters'),
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

    const [errorState, setErrorState] = useState(
        {
            username: '',
            email: '',
            password: '',
            role: ''
        }
    )

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(user).then(valid => setDisabled(!valid))
    }, [user]);

    const validate = (event) => {
        yup.reach(formSchema, event.target.name)
           .validate(event.target.value)
           .then( valid => {
            setErrorState({
                   ...errorState,
                   [event.target.name]: ''
               })
           })
           .catch( error => {
            setErrorState({
                ...errorState,
                [event.target.name]: error.errors[0]
            })
           })
    }

    const changeHandler = (event) => {
        event.persist();
        validate(event);
        setUser({...user, [event.target.name]: event.target.value});
    };

    return (
        <StyledFormContainer>
            <StyledForm>
                <StyledLabel htmlFor='username'>Username</StyledLabel>
                <StyledInput 
                    id='username' 
                    name='username' 
                    type='text' 
                    placeholder='Username'
                    value={user.username}
                    onChange={changeHandler}
                />
                {errorState.username.length > 0 ? <p>{errorState.username}</p> : null}

                <StyledLabel htmlFor='email'>Email</StyledLabel>
                <StyledInput 
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={user.email}
                    onChange={changeHandler}
                />
                {errorState.email.length > 0 ? <p>{errorState.email}</p> : null}

                <StyledLabel htmlFor='password'>Password</StyledLabel>
                <StyledInput 
                    id='password'
                    name='password'
                    type='text'
                    placeholder='Password'
                    value={user.password}
                    onChange={changeHandler}
                />
                {errorState.password.length > 0 ? <p>{errorState.password}</p> : null}
                
                <div>
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
                </div>
                {errorState.role.length > 0 ? <p>{errorState.role}</p> : null}

                <StyledButton type='submit' disabled={disabled}>Submit</StyledButton>
            </StyledForm>
        </StyledFormContainer>
    );
};

export default Register;



