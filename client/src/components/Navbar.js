import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from '../image/logo.png'
import styled from 'styled-components'

const Wrapper = styled.nav`
background-color: antiquewhite;
.align_end{
 margin-left: 0%;

 
  align-content: left;
  align-items: left;
}
.btn-1:hover{
background-color: purple;
color: white;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}

.btn-1{
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: rgba(20,20,20, 0.4) -5px 5px, rgba(20,20,20, 0.3) -10px 10px, rgba(20,20,20, 0.2) -15px 15px, rgba(20,20,20, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
.btn-2{

text-decoration: none;
background-color: #ff99d5;
font-size: 18px;
color: black;
border-top-left-radius: 20px;
border-bottom-right-radius: 20px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
.btn-2:hover{
  background-color: #6efa77;
  box-shadow: rgba(89, 250,40,0.4) -5px 5px, rgba(89, 250,40,0.3) -10px 10px, rgba(89, 250,40,0.2) -15px 15px, rgba(89, 250,40,0.1) -20px 20px, rgba(89, 250,40, 0.05) -25px 25px;
}

`
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <Wrapper>
     <nav className="container-fluid p-0">
      <div className="   d-flex bd-highlight mb-3">
      <div className="me-auto p-2 "> <img style={{width:"5rem"}} src={Logo} alt="logo"/> </div>
      <div className="p-2 bd-highlight align-self-center">
      {user?.displayName ? (
          <button className=" btn-1 px-5 py-2  " onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <Link className=" btn-2 px-5 py-2  " to="/signin">
            Sign in
          </Link>
          
          
        )}
       
      </div>
      </div>
    </nav>
   </Wrapper>
  );
};

export default Navbar;
