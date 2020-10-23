import React, { useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import * as yup from "yup";

const StyledContainer = styled.form`
display: flex;
justify-content: center;
background-color: #867EBA;
padding-bottom: 30%;
padding-top:10%;
`
const StyledForm = styled.form`
width: 60%;
display: flex;
flex-direction: column;
background-color: lightgoldenrodyellow;

`
const StyledFormInputs = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  color:chocolate;
  font-size:2rem;
  h2{
    font-size:4.5rem;
    text-align:center;
    background-color: #867EBA;
    color:lightgoldenrodyellow;
    padding-bottom:2%;
  }
`
const StyledLabel = styled.label`
display:flex;
width: 8%;
`
const StyledInputContainer = styled.div`
  width: 100%;;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin:1% 0;
`
const StyledInputs = styled.input`
width: 90%;
margin:1%;
height: 3.5vh;
border: 1px solid grey;
border-radius: 50px;
outline: none;
font-size: 1rem;
dispaly:flex;
justify-content:center;
align-items:center;
`
const StyledTime = styled.div`
  display:flex;
  margin:.7%;
  .input{
    width:30%;
    justify-content:flex-start;
  }
`
const StyledErrorsContainer = styled.div`
font-size: 0.75rem;
color: #DA3436;
`
const StyledButton = styled.button`
margin:2% 0 0 45%;
font-size: 2rem;
align-items:center;
justify-content:center;
width: 10%;
height: 6vh;
background-color: #867EBA;
border: none;
border-radius: 50px;
outline: none;
&:hover{
    cursor: pointer;
    background-color: #7E7E7E;
    transform: scale(1.1);
}
`
const StyledButtonContainer = styled.div`
width:100%;
`
const StyledItemContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:3%;
`

const StyledItem = styled.div`
width:100%;
display:flex;
flex-directiom:column;
justify-content:center;
align-items:center;

`

const StyledAddItem = styled.div`
width:35%;
dispaly:flex;
`

const StyledItemList = styled.div`
width:55%;
dispaly:flex;
justify-items:center;
align-items:center;
`


const formSchema = yup.object().shape({
  name: yup.string().required("event name is required").min(2,'name must be at least 2 characters long'),
  location: yup.string().required("event location is required").min(2,'location must be at least 2 characters long'),
  date: yup.string().required("event date is required").max(8,'date cant not be more than 8 characters'),
  time: yup.string().required("event start time is required").max(4,'characters long'),
  meridiem: yup.string().oneOf(["A.M", "P.M"]),
  items: yup.string(),
});

const initialFormValues = {
  name: "",
  location: "",
  date: "",
  time: "",
  meridiem:'',
  items: [],
};

const initialFormErrors={
  name:'',
  location:'',
  date:'',
  time:'',
  meridiem:'',
};
const itemList = [
  {
    id:'',
    name:'',
  },
];

const initialPotlucks = [];

const PotluckCreate = (props) => {

  const [potlucks, setPotlucks] = useState(initialPotlucks);
  const [formValues, setFormValues] = useState(initialFormValues);


  const [formErrors, setFormErrors]= useState(initialFormErrors);
  const [name, setName] = useState('');
  const [potluckItem, setPotluckItems] = useState(itemList);
  


  const getPotlucks=()=>{
    axios.get(`https://www.POTLUCKS.com/potlucks`)
    .then((res)=>{
      setPotlucks(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const postNewPotluck=(newPotluck)=>{
    axios.post(`https://www.POTLUCKS.com/potlucks`)
    .then((res)=>{
      setPotlucks([res.data, ...potlucks]);
      setFormValues(initialFormValues);
    })
    .catch((err)=>{
      console.log(err);
    })
    postNewPotluck(newPotluck);
  }

  useEffect(()=>{
    getPotlucks();
  }, []);

  const validate = (evt) => {
    yup.reach(formSchema, evt.target.name)
       .validate(evt.target.value)
       .then( valid => {
        setFormErrors({
               ...formErrors,
               [evt.target.name]: ''
           })
       })
       .catch( error => {
        setFormErrors({
            ...formErrors,
            [evt.target.name]: error.errors[0]
        })
       })
}
  const onChange= (evt) => {
    evt.persist();
    validate(evt);
   setPotlucks({...potlucks, [evt.target.name]: evt.target.value});
};

const itemChange = (evt)=>{
  evt.preventDefault();
  setName(evt.target.value)
}

  const addItem = (evt) =>{
    evt.preventDefault();
    const newList = potluckItem.concat({name});
    setPotluckItems(newList);
    setName('');
  }
 
  const formSubmit=()=>{
    setPotluckItems({...potluckItem.split(',')
    .map(v=>v.trim())
    .filter(Boolean)
    .join('\n')
  });
  }
 
  if (!potlucks) {
    return <div>Loading potluck information...</div>;
  }

  return (
    <StyledContainer>
    <StyledForm>
    <StyledFormInputs>
      <h2>Create a Potluck</h2>
      <StyledErrorsContainer>
        <div>{formErrors.name}</div>
        <div>{formErrors.location}</div>
        <div>{formErrors.date}</div>
        <div>{formErrors.time}</div>
        
      </StyledErrorsContainer>
      <StyledInputContainer>
      <StyledLabel htmlfor='name'>
        Name:</StyledLabel>

        <StyledInputs
          type="text"
          id='name'
          name='name'
          placeholder='name of event'
          value={potlucks.name}
          onChange={onChange}
        />
        </StyledInputContainer>
        <StyledInputContainer>
      <StyledLabel htmlfor='location'>
        Location:</StyledLabel>
 
      <StyledInputs
          id='location'
          name='location'
          type='text'
          placeholder='location'
          value={potlucks.location}
          onChange={onChange}
        />
        </StyledInputContainer>
        <StyledInputContainer>
      <StyledLabel htmlfor='date'>
        Date:</StyledLabel>

        <StyledInputs 
          id='date'
          name='date'
          type='text'
          placeholde='date'
          value={potlucks.date}
          onChange={onChange}
        />
        </StyledInputContainer>

        <StyledTime>
      <StyledLabel htmlfor='time'>
        Time:</StyledLabel>
        <input 
          id='time'
          name='time'
          type='text'
          placeholder='time'
          value={potlucks.time}
          onChange={onChange}
        />
        <br/>
          <select onChange={onChange} value={potlucks.meridiem} name='meridiem'>
            <option value="a.m">A.M</option>
            <option value="p.m">P.M</option>
          </select>
        </StyledTime>
        <br/>
        <StyledItemContainer>
      <StyledLabel htmlfor='items'>
      Wanted Items List:
      </StyledLabel>
      
      <StyledItem>
      <StyledAddItem>
      <AddItem
        name={name}
        onChange={itemChange}
        onAdd={addItem}
      />
      </StyledAddItem>
      <StyledItemList>
      <ItemList
        potluckItem={potluckItem}
      />
      </StyledItemList>
      </StyledItem>
      </StyledItemContainer>
      <StyledButtonContainer>
      <StyledButton type='button' onClick={onChange}>Create</StyledButton>
      </StyledButtonContainer>

      </StyledFormInputs>
     </StyledForm>
    </StyledContainer>
  );
};

const AddItem = ({name, onChange, onAdd})=>(
  <div className='AddItem-container'>
  <div className='input container'>
    <input 
    type="text"
    value={name}
    onChange={onChange}
    />
    </div>
    <button type='button' onClick={onAdd}>Add Item</button>
  </div>
);

const ItemList=({potluckItem})=>(
  <div>
  <h3>Added Items</h3>
  <ul>
    {potluckItem.map(item=>(
      <ol key={item.id}>{item.name}</ol>
    ))}
  </ul>
  </div>
)

export default PotluckCreate;
