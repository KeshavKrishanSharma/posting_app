import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "../image/login.jpg";
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
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <Wrapper>
      <main>
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-12">
              <img src={Login} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-12">
                
              <div class="card-body text-center">
                
                <div className="centerit">
          <GoogleButton  onClick={handleGoogleSignIn} />
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
