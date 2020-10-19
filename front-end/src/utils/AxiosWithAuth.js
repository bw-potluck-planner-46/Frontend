import axios from 'axios';

const Auth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
      baseURL: "",
      headers: {
        token: token,
      },
    });
  };
  
  export default Auth;
