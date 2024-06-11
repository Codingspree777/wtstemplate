import { useState } from "react";

import { Button } from "@mui/material";

import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid #000;
`;

const HeaderText = styled.h3`
  color: #606060;
`;

const StyledButton = styled.button`
  background-color: #f8f8ff;
  border-radius: 50%;
  border: none;
  color: #d3d3d3;
  width: 30px;
  height: 30px;
`;

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    open && (
      <HeaderContainer>
        <HeaderText>Create a Campaign</HeaderText>
        <StyledButton onClick={() => setOpen(false)}>X</StyledButton>
      </HeaderContainer>
    )
  );
};

export default Header;
