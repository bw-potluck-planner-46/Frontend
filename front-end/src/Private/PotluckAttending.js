import React, {useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Input from "../utils/ChangeInputs";

let Attending = (props) => {
  let [guest, setGuest] = Input("");

  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then((response) => {
        console.log(response);
        setGuest(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {guest.map((guest) => (
        <h2>{guest}</h2>
      ))}
      <form>{/* form here */}</form>
    </div>
  );
};

export default Attending;