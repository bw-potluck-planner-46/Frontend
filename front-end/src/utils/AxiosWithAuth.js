import axios from 'axios';

const Auth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
      baseURL: "https://potluckplanner-bw-mnc.herokuapp.com/",
      headers: {
        token: token,
      },
    });
  };
  
  export default Auth;
