import React, {useEffect} from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import Input from "../utils/ChangeInputs";

let Attending = (props) => {
  let [organizer, setOrganizer] = Input("");

  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then((response) => {
        console.log(response);
        setOrganizer(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {organizer.map((organizer) => (
        <h2>{organizer}</h2>
      ))}
      <form>{/* form here */}</form>
    </div>
  );
};

export default Attending;