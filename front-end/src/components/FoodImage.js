import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 50%;
`

const FoodImage = () => {
    const [foodPicture, setFoodPicture] = useState([])

    useEffect(() => {
        const fetchFood = () => {
            axios.get(`https://foodish-api.herokuapp.com/api/`)
                .then(resolve => {
                    setFoodPicture(resolve.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchFood()
    }, [])

    return (
        <StyledImage src={foodPicture.image} />
    );
}

export default FoodImage;