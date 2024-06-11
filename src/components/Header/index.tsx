import { useState } from "react";

import styled from "styled-components";

import Button from "../../common/button";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  height: 50px;
  box-shadow: 0px 0px 10px 0px #00000015;
  margin-bottom: 5px;
`;

const HeaderText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: RGBA(0, 0, 0, 0.87);
`;

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    open && (
      <HeaderContainer>
        <HeaderText>Create a Campaign</HeaderText>
        <Button onClick={() => setOpen(false)} />
      </HeaderContainer>
    )
  );
};

export default Header;
