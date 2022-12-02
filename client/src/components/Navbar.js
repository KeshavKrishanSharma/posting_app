import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from "../image/logo.png";
import styled from "styled-components";

const Wrapper = styled.nav`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  .align_end {
    margin-left: 0%;

    align-content: left;
    align-items: left;
  }
  .btn-1:hover {
    background-color: purple;
    color: white;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }

  .btn-1 {
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: rgba(20, 20, 20, 0.4) -5px 5px, rgba(20, 20, 20, 0.3) -10px 10px,
      rgba(20, 20, 20, 0.2) -15px 15px, rgba(20, 20, 20, 0.1) -20px 20px,
      rgba(240, 46, 170, 0.05) -25px 25px;
    margin: auto;
  }
  .btn-2 {
    text-decoration: none;
    background-color: #ff99d5;
    font-size: 18px;
    color: black;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
    margin: auto;
  }
  .btn-2:hover {
    background-color: #6efa77;
    box-shadow: rgba(89, 250, 40, 0.4) -5px 5px,
      rgba(89, 250, 40, 0.3) -10px 10px, rgba(89, 250, 40, 0.2) -15px 15px,
      rgba(89, 250, 40, 0.1) -20px 20px, rgba(89, 250, 40, 0.05) -25px 25px;
  }

  .pagelinks {
    text-decoration: none;
    --b: 2px; /* border thickness */
    --s: 1.45em; /* size of the corner */
    --color: #373b44;

    padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
    color: var(--color);
    --_p: var(--s);
    background: conic-gradient(
        from 90deg at var(--b) var(--b),
        #0000 90deg,
        var(--color) 0
      )
      var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
      calc(100% - var(--b) - 2 * var(--_p));
    transition: 0.3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: 0.6em;
    font-size: 16px;

    border: 0;

    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .pagelinks:hover,
  .pagelinks:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }

  .pagelinks:active {
    background: var(--color);
    color: #fff;
  }
`;
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
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link tp="/" className="navbar-brand" >
            <img style={{ width: "3.5rem" }} src={Logo} alt="logo" />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="pagelinks  px-3 mx-3 py-1 rounded-pill">
                <h4>Home </h4>
              </Link>

              <Link
                to="/account"
                className="pagelinks mx-3  px-3 py-1 rounded-pill"
              >
                <h4>Add Post </h4>
              </Link>
            </ul>
            <form className="d-flex text-center">
              {user?.displayName ? (
                <button className=" btn-1 px-5 py-2  " onClick={handleSignOut}>
                  Logout
                </button>
              ) : (
                <Link className=" btn-2 px-5 py-2  " to="/signin">
                  Sign in
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
