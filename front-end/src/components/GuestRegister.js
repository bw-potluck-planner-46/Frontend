
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/AxiosWithAuth';
import axios from 'axios'

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
    margin: 0 2% 2% 0;
`

const StyledInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StyledError = styled.p`
    font-size: 0.75rem;
    color: #DA3436;
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
    first_name: yup.string().required('Please enter a first name').min(2, 'must have 2 characters'),
    last_name: yup.string().required('Please enter a last name').min(2, 'must have 2 characters'),
    username: yup.string().required('Please enter a username').min(5, 'Must have at least 5 characters').max(15, 'May not be longer than 15 characters'),
    email: yup.string().email('Please enter a valid email').required('Please enter a valid email'),
    password: yup.string().required('Password is required').min(5, 'Must have at least 5 characters')
})

const Register = (props) => {

    const [user, setUser] = useState(
        {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
        }
    );

    const [errorState, setErrorState] = useState(
        {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
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

    const history = useHistory()

    const guestRegistering = (event) => {
        event.preventDefault()
        console.log("remember to register your muskrats!")
        // props.postUser(user)
        console.log("posting user:", user)
        axiosWithAuth()
            .post('/api/auth/register', user)
            .then(response => console.log("registration response:", response), history.push(`/guest/dashboard`))
            .catch(error => console.log("registration error:", error))
        history.push(`/guest/login`)
    }
    return (
        <StyledFormContainer>
            <StyledForm onSubmit={guestRegistering}>
            <StyledLabel htmlFor='first_name'>First Name</StyledLabel>
                <StyledInputContainer>
                    <StyledInput 
                        id='first_name' 
                        name='first_name' 
                        type='text' 
                        placeholder='First Name'
                        value={user.first_name}
                        onChange={changeHandler}
                    />
                    {errorState.first_name.length > 0 ? <StyledError>{errorState.first_name}</StyledError> : null}
                </StyledInputContainer>
                <StyledLabel htmlFor='last_name'>Last Name</StyledLabel>
                <StyledInputContainer>
                    <StyledInput 
                        id='last_name' 
                        name='last_name' 
                        type='text' 
                        placeholder='Last Name'
                        value={user.last_name}
                        onChange={changeHandler}
                    />
                    {errorState.last_name.length > 0 ? <StyledError>{errorState.last_name}</StyledError> : null}
                </StyledInputContainer>
                <StyledLabel htmlFor='username'>Username</StyledLabel>
                <StyledInputContainer>
                    <StyledInput 
                        id='username' 
                        name='username' 
                        type='text' 
                        placeholder='Username'
                        value={user.username}
                        onChange={changeHandler}
                    />
                    {errorState.username.length > 0 ? <StyledError>{errorState.username}</StyledError> : null}
                </StyledInputContainer>

                <StyledLabel htmlFor='email'>Email</StyledLabel>
                <StyledInputContainer>
                    <StyledInput 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={user.email}
                        onChange={changeHandler}
                    />
                    {errorState.email.length > 0 ? <StyledError>{errorState.email}</StyledError> : null}
                </StyledInputContainer>

                <StyledLabel htmlFor='password'>Password</StyledLabel>
                <StyledInputContainer>
                    <StyledInput 
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={user.password}
                        onChange={changeHandler}
                    />
                    {errorState.password.length > 0 ? <StyledError>{errorState.password}</StyledError> : null}
                </StyledInputContainer>

                <StyledButton type='submit' disabled={disabled}>Register</StyledButton>
            </StyledForm>
        </StyledFormContainer>
    );
};

export default Register;



