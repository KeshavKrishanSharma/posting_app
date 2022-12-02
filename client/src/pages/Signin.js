import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../image/login.jpg";
import AOS from 'aos'
const Wrapper = styled.main`


 .card {
  margin: auto;
   border: 0;
    max-width: 440px;
    
  }
 .centerit{
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
margin-top: -1rem !important;
  }
`;

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({duration:2000})
    if (user != null) {
      navigate("/account");
    }
  }, [user,navigate]);

  return (
    <Wrapper>
      <main>
        <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card mb-3 mt-5" >
          <div className="row g-0">
            <div className="col-12 ">
              <img src={Login} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-12">
                
              <div  className="card-body text-center">
                
                <div  className="centerit">
          <GoogleButton   onClick={handleGoogleSignIn} />
        </div>
              </div>
            </div>
          </div>
        </div>
      
      </main>
    </Wrapper>
  );
};
export default Signin;
