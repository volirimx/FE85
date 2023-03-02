import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const ActivatePage = () => {
  const params = useParams();
  console.log(params);

  const navigate = useNavigate()
  

  useEffect(() => {
    (async () => {
      try {
        await axios.post(
          "https://studapi.teachmeskills.by/auth/users/activation/",
          params
        );
        navigate('/Login')
      } catch (e) {
        navigate('/Unsuccess')
        
      }
      
      //   axios.post(
      //     "https://studapi.teachmeskills.by/auth/users/resend_activation/",
      //     { email: "dennicraft.ds@gmail.com" }
      //   );
    })();
  }, []);

  return <div>Activation Page</div>;
};

export default ActivatePage;