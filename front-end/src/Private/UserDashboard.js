import React, { useState } from 'react';
import * as yup from 'yup'

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

    const changeHandler = (event) => {
        event.persist();
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
                    id='gluten'
                    type='checkbox'
                    name='allergy'
                    checked={personalInfo.gluten}
                    onChange={changeHandler}
                />
                <label htmlFor='gluten'>Gluten</label>

                <input 
                    id='dairy'
                    type='checkbox'
                    name='allergy'
                    checked={personalInfo.dairy}
                    onChange={changeHandler}
                />
                <label htmlFor='dairy'>Dairy</label>

                <input 
                    id='shellfish'
                    type='checkbox'
                    name='allergy'
                    checked={personalInfo.shellfish}
                    onChange={changeHandler}
                />
                <label htmlFor='shellfish'>Shellfish</label>

                <input 
                    id='nuts'
                    type='checkbox'
                    name='allergy'
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
                    name='address'
                    placeholder='Street Number'
                    value={personalInfo.street}
                    onChange={changeHandler}
                />

                <label htmlFor='city'>City:</label>
                <input 
                    id='city'
                    type='text'
                    name='address'
                    placeholder='City'
                    value={personalInfo.city}
                    onChange={changeHandler}
                />

                <label htmlFor='state'>State</label>
                <input 
                    id='state'
                    type='text'
                    name='address'
                    value={personalInfo.state}
                    onChange={changeHandler}
                />

                <label htmlFor='zip'>ZIP</label>
                <input 
                    id='zip'
                    type='text'
                    name='address'
                    value={personalInfo.zip}
                    onChange={changeHandler}
                />
            </div>

            <button type='reset'>Cancel</button>
            <button type='submit'>Save</button>
        </form>
    )
}

export default UserDashboard;