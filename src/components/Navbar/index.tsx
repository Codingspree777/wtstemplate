import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #454545;
  width: 100px;
  height: 100vh;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>Nav</h1>
    </NavbarContainer>
  );
};

export default Navbar;
