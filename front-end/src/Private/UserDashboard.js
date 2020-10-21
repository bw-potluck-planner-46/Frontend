import React, { useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledLabel = styled.label`
    margin-bottom: 2%;
`

const StyledInput = styled.input`
    position: relative;
    left: 7px;
    width: 50%;
    height: 3.5vh;
    padding: 0 1.75%;
    border: 1px solid grey;
    border-radius: 50px;
    outline: none;
    font-size: 1rem;
    margin: 0 2% 2% 0;
`

const StyledNameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
`

const StyledAllergyContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledAllergiesLabel = styled.label`
    margin-bottom: 5%;
`

const StyledAllergyInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2%;
`

const StyledAddressContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2%;
`

const StyledInputMiddleInitialAndState = styled.input`
    position: relative;
    left: 7px;
    width: 5%;
    height: 3.5vh;
    border: 1px solid grey;
    border-radius: 50px;
    padding: 0 1.75%;
    outline: none;
    font-size: 1rem;
    margin: 0 2% 2% 0;
`

const StyledInputZip = styled.input`
    position: relative;
    left: 7px;
    width: 15%;
    height: 3.5vh;
    padding: 0 1.75%;
    border: 1px solid grey;
    border-radius: 50px;
    outline: none;
    font-size: 1rem;
    margin: 0 2% 2% 0;
`

const StyledButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 2%;
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
    firstName: yup.string(),
    middleInitial: yup.string().max(1, 'No more than 1 character'),
    lastName: yup.string(),
    phoneNumber: yup.string(),
    gluten: yup.string(),
    dairy: yup.string(),
    shellfish: yup.string(),
    nuts: yup.string(),
    street: yup.string(),
    city: yup.string(),
    state: yup.string().min(2, `Please put your State's abbreviation`).max(2, `Please put your State's abbreviation`), 
    zip: yup.string().min(5, 'Please put your ZIP code').max(9, 'Please put your ZIP code')
})

const UserDashboard = () => {

    const [personalInfo, setPersonalInfo] = useState(
        {
            firstName: '',
            middleInitial: '',
            lastName: '',
            phoneNumber: '',
            gluten: '',
            dairy: '',
            shellfish: '',
            nuts: '',
            street: '',
            city: '',
            state: '', 
            zip: ''
        }
    )

    const [errorState, setErrorState] = useState(
        {
            firstName: '',
            middleInitial: '',
            lastName: '',
            phoneNumber: '',
            gluten: '',
            dairy: '',
            shellfish: '',
            nuts: '',
            street: '',
            city: '',
            state: '', 
            zip: ''
        }
    )

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
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setPersonalInfo({...personalInfo, [event.target.name]: value});
    };

    return (
        <StyledFormContainer>
            <StyledForm>
                <StyledNameContainer>
                    <StyledLabel htmlFor='firstName'>First Name:</StyledLabel>
                    <StyledInput 
                        id='firstName'
                        type='text'
                        name='firstName'
                        placeholder='Please Enter Your First Name'
                        value={personalInfo.firstName}
                        onChange={changeHandler}
                    />

                    <StyledLabel htmlFor='middleInitial'>Middle Initial:</StyledLabel>
                    <StyledInputContainer>
                        <StyledInputMiddleInitialAndState 
                            id='middleInitial'
                            type='text'
                            name='middleInitial'
                            value={personalInfo.middleInitial}
                            onChange={changeHandler}
                        />
                        {errorState.middleInitial.length > 0 ? <StyledError>{errorState.middleInitial}</StyledError> : null}
                    </StyledInputContainer>

                    <StyledLabel htmlFor='lastName'>Last Name:</StyledLabel>
                    <StyledInput 
                        id='lastName'
                        type='text'
                        name='lastName'
                        placeholder='Please Enter Your Last Name'
                        value={personalInfo.lastName}
                        onChange={changeHandler}
                    />
                </StyledNameContainer>

                <StyledLabel htmlFor='phoneNumber'>Phone Number:</StyledLabel>
                <StyledInput 
                    id='phoneNumber'
                    type='tel'
                    name='phoneNumber'
                    placeholder='555-555-5555'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    value={personalInfo.phoneNumber}
                    onChange={changeHandler}
                />

                <StyledAllergyContainer>
                    <StyledAllergiesLabel>Allergies</StyledAllergiesLabel>
                    <StyledAllergyInputContainer>
                        <input 
                            id='allergy'
                            type='checkbox'
                            name='gluten'
                            checked={personalInfo.gluten}
                            onChange={changeHandler}
                        />
                        <label htmlFor='gluten'>Gluten</label>

                        <input 
                            id='allergy'
                            type='checkbox'
                            name='dairy'
                            checked={personalInfo.dairy}
                            onChange={changeHandler}
                        />
                        <label htmlFor='dairy'>Dairy</label>

                        <input 
                            id='allergy'
                            type='checkbox'
                            name='shellfish'
                            checked={personalInfo.shellfish}
                            onChange={changeHandler}
                        />
                        <label htmlFor='shellfish'>Shellfish</label>

                        <input 
                            id='allergy'
                            type='checkbox'
                            name='nuts'
                            checked={personalInfo.nuts}
                            onChange={changeHandler}
                        />
                        <label htmlFor='nuts'>Nuts</label>
                    </StyledAllergyInputContainer>
                </StyledAllergyContainer>
                <StyledAddressContainer>
                    <StyledLabel htmlFor='street'>Street Number:</StyledLabel>
                    <StyledInput 
                        id='street'
                        type='text'
                        name='street'
                        placeholder='Street Number'
                        value={personalInfo.street}
                        onChange={changeHandler}
                    />

                    <StyledLabel htmlFor='city'>City:</StyledLabel>
                    <StyledInput 
                        id='city'
                        type='text'
                        name='city'
                        placeholder='City'
                        value={personalInfo.city}
                        onChange={changeHandler}
                    />

                    <StyledLabel htmlFor='state'>State:</StyledLabel>
                    <StyledInputContainer>
                        <StyledInputMiddleInitialAndState 
                            id='state'
                            type='text'
                            name='state'
                            value={personalInfo.state}
                            onChange={changeHandler}
                        />
                        {errorState.state.length > 0 ? <StyledError>{errorState.state}</StyledError> : null}
                    </StyledInputContainer>

                    <StyledLabel htmlFor='zip'>ZIP:</StyledLabel>
                    <StyledInputContainer>
                        <StyledInputZip 
                            id='zip'
                            type='text'
                            name='zip'
                            value={personalInfo.zip}
                            onChange={changeHandler}
                        />
                        {errorState.zip.length > 0 ? <StyledError>{errorState.zip}</StyledError> : null}
                    </StyledInputContainer>
                </StyledAddressContainer>

                <StyledButtonContainer>
                    <StyledButton type='reset'>Cancel</StyledButton>
                    <StyledButton type='submit'>Save</StyledButton>
                </StyledButtonContainer>
            </StyledForm>
        </StyledFormContainer>
    )
}

export default UserDashboard;