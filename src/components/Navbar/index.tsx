import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  background-color: #20232a;
  width: 56px;
`;

const Navbar = () => {
  return <NavbarContainer>Nav</NavbarContainer>;
};

export default Navbar;
