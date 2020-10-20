import React, { useState } from 'react';
import * as yup from 'yup'

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
    zip: yup.number().min(5, 'Please put your ZIP code').max(5, 'Please put your ZIP code')
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
        <form>
            <div className='nameContainer'>
                <label htmlFor='firstName'>First Name:</label>
                <input 
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder='Please Enter Your First Name'
                    value={personalInfo.firstName}
                    onChange={changeHandler}
                />

                <label htmlFor='middleInitial'>Middle Initial:</label>
                <input 
                    id='middleInitial'
                    type='text'
                    name='middleInitial'
                    value={personalInfo.middleInitial}
                    onChange={changeHandler}
                />
                {errorState.middleInitial.length > 0 ? <p>{errorState.middleInitial}</p> : null}

                <label htmlFor='lastName'>Last Name:</label>
                <input 
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder='Please Enter Your Last Name'
                    value={personalInfo.lastName}
                    onChange={changeHandler}
                />
            </div>

            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input 
                id='phoneNumber'
                type='tel'
                name='phoneNumber'
                placeholder='555-555-5555'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                value={personalInfo.phoneNumber}
                onChange={changeHandler}
            />

            <div className='allergyContainer'>
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
            </div>
            <div className='addressContainer'>
                <label htmlFor='street'>Street Number:</label>
                <input 
                    id='street'
                    type='text'
                    name='street'
                    placeholder='Street Number'
                    value={personalInfo.street}
                    onChange={changeHandler}
                />

                <label htmlFor='city'>City:</label>
                <input 
                    id='city'
                    type='text'
                    name='city'
                    placeholder='City'
                    value={personalInfo.city}
                    onChange={changeHandler}
                />

                <label htmlFor='state'>State</label>
                <input 
                    id='state'
                    type='text'
                    name='state'
                    value={personalInfo.state}
                    onChange={changeHandler}
                />
                {errorState.state.length > 0 ? <p>{errorState.state}</p> : null}

                <label htmlFor='zip'>ZIP</label>
                <input 
                    id='zip'
                    type='text'
                    name='zip'
                    value={personalInfo.zip}
                    onChange={changeHandler}
                />
                {errorState.zip.length > 0 ? <p>{errorState.zip}</p> : null}
            </div>

            <button type='reset'>Cancel</button>
            <button type='submit'>Save</button>
        </form>
    )
}

export default UserDashboard;