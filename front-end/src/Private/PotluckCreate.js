import React, { useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import * as yup from "yup";

const StyledContainer = styled.form`
  dispaly:flex;
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
const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const StyledInputs = styled.input`
  width: 50%;
  height: 3.5vh;
`
const StyledTime = styled.div`
  display:flex;
  
`
const StyledErrorsContainer = styled.div``
const StyledList = styled.div``
const StyledButton = styled.button`
  font-size: 1rem;
  width: 10%;
  background-color: #867EBA;
  &:hover{
    cursor: pointer;
}
`
const StyledError = styled.p`
  font-size: 0.75rem;
  color: #DA3436;
`

const formSchema = yup.object().shape({
  name: yup.string().required("event name is required").min(2,'name must be at least 2 characters long'),
  location: yup.string().required("event location is required").min(2,'location must be at least 2 characters long'),
  date: yup.string().required("event date is required").max(8,'date cant not be more than 8 characters'),
  time: yup.string().required("event start time is required").max(4,'characters long'),
  meridiem: yup.string().required().oneOf(["a.m.", "p.m."]),
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
  const{items} = props;
  const [potlucks, setPotlucks] = useState(initialPotlucks);
<<<<<<< HEAD
  const [formValues, setFormValues] = useState(initialFormValues);
=======
  const [formValues, setFormValues] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    meridiem:'',
    items: [],
  });
    
    const handleCommaSeparatedChange = evt => {
        const { value } = evt.target
        setItems({
            commaSeparated: value,
            multiline: value
                .split(',')
                .map(v => v.trim())
                .filter(Boolean)
            .join('\n'),
        })
    }
        const handleMultilineChange = evt => {
        const { value } = evt.target
        setItems({
            commaSeparated: value,
            multiline: value
                .split(',')
                .map(v => v.trim())
                .filter(Boolean)
            .join('\n'),
        })
    }
  const { url, path } = useParams();

  const [itemInput, setItemInput] = useState('');
>>>>>>> b72268650c7e357e92b1f0b8df359e00aef71487
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

  const addItem =() =>{
    const newList = potluckItem.concat({name});
    setPotluckItems(newList);
    setName('');
  }
 

  if (!potlucks) {
    return <div>Loading potluck information...</div>;
  }

  return (
    <StyledContainer>
    <StyledForm>
      <h2>Create a Potluck</h2>
      <StyledErrorsContainer>
        <div>{formErrors.name}</div>
        <div>{formErrors.location}</div>
        <div>{formErrors.date}</div>
        <div>{formErrors.time}</div>
        <div>{formErrors.meridiem}</div>
      </StyledErrorsContainer>
      <StyledLabel htmlfor='name'>Name:</StyledLabel>
      <StyledInputContainer>
        <StyledInputs
          type="text"
          id='name'
          name='name'
          placeholder='name of event'
          value={potlucks.name}
          onChange={onChange}
        />
        </StyledInputContainer>
      <StyledLabel htmlfor='location'>Location:</StyledLabel>
      <StyledInputContainer>  
      <StyledInputs
          id='location'
          name='location'
          type='text'
          placeholder='location'
          value={potlucks.location}
          onChange={onChange}
        />
        </StyledInputContainer>
      <StyledLabel htmlfor='date'>Date:</StyledLabel>
      <StyledInputContainer>
        <StyledInputs 
          id='date'
          name='date'
          type='text'
          placeholde='date'
          value={potlucks.date}
          onChange={onChange}
        />
        </StyledInputContainer>
      <StyledLabel htmlfor='time'>Time:</StyledLabel>
      <StyledInputContainer>
        <StyledInputs 
          id='time'
          name='time'
          type='text'
          placeholder='time'
          value={potlucks.time}
          onChange={onChange}
        />
        </StyledInputContainer>
        <StyledTime>
          <StyledLabel>Meridiem</StyledLabel>
          <select onChange={onChange} value={potlucks.meridiem} name='meridiem'>
            <option value=""></option>
            <option value="a.m">A.M</option>
            <option value="p.m">P.M</option>
          </select>
        </StyledTime>

      <StyledLabel htmlfor='items'>
      Suggested Items:
      </StyledLabel>

      <AddItem
        name={name}
        onChange={itemChange}
        onAdd={addItem}
      />
      <ItemList
        potluckItem={potluckItem}
      />

      <StyledButton type='button' onClick={onChange}>Craete</StyledButton>
     </StyledForm>
    </StyledContainer>
  );
};

const AddItem = ({name, onChange, onAdd})=>(
  <div>
    <input 
    type="text"
    value={name}
    onChange={onChange}
    />
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
