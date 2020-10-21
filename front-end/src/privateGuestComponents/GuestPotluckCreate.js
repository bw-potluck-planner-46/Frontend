import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch, Route } from "react-router-dom";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("event name is required"),
  location: yup.string().required("event location is required"),
  date: yup.string().required("event date is required"),
  time: yup.string().required("event start time is required"),
  meridiem: yup.string().required().oneOf(["a.m.", "p.m."]),
});

const PotluckCreate = () => {
  const [potluck, setPotluck] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    items: "",
  });
  const [items, setItems] = useState({
      commaSeparated: '',
      multiline:''
  });
    
    const handleCommaSeparatedChange = evt => {
        const { value } = evt, target
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
        const { value } = evt, target
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

  const change = (evt) => {
    evt.persist();
    setPotluck({ ...potluck, [evt.target.name]: evt.target.value });
    };
    
  const id =
    potluck.find((item) => {
      return item.id == potluck.id;
    }) || {};

  if (!potluck) {
    return <div>Loading potluck information...</div>;
  }

  return (
    <div className="form-group card">
      <form>
        <h2>Create a Potluck:</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={potluck.name}
            onChange={change}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            placholder="location"
            value={potluck.location}
            onChange={change}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            name="date"
            placeholder="date"
            value={potluck.date}
            onChange={change}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            name="time"
            placeholder="time"
            value={potluck.time}
            onChange={change}
          />
              </label>
              <label>
                  Items you would like to see:
                     <input
                      type="text"
                      name='items'
                      placholder='items go here'
                      value={ potluck.items }
                      onChange={handleCommaSeparatedChange}
                  />
              </label>
              <label>
                  Items enter:
                     <textarea 
                     value={ multiline } 
                     cols="30" 
                     rows="10" 
                     onChange={ handleMultilineChange }
                     />
              </label>
              <div className='form-group btn'>
                <button type='submit'>Create</button>
                <button type='reset'>Cancle</button>
              </div>
      </form>
    </div>
  );
};

export default PotluckCreate;
