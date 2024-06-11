import { useState } from "react";

import styled from "styled-components";

import Slide from "@mui/material/Slide";

import Button from "../../common/button";
import Cards from "./cards";

const StyledSlide = styled(Slide)`
  box-shadow: 1px 0px 0px 0px #00000014;
  height: 85vh;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 360px;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: RGBA(0, 0, 0, 0.87);
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: RGBA(0, 0, 0, 0.87);
  padding: 24px 24px 0 24px;
`;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const cardsList = [
    {
      name: "Header",
      id: "Header",
    },
    {
      name: "Body Message ",
      id: "Body",
    },
    {
      name: "Footer text",
      id: "Footer",
    },
    {
      name: "Buttons",
      id: "Button",
    },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <StyledSlide direction="right" in={open} mountOnEnter unmountOnExit>
      <SidebarContainer>
        <SidebarHeader>
          <HeaderText>Edit Message</HeaderText>
          <Button onClick={toggleDrawer(false)} />
        </SidebarHeader>
        <Title>Content</Title>
        {cardsList.map((card) => {
          return <Cards id={card.id} name={card.name} key={card.id} />;
        })}
      </SidebarContainer>
    </StyledSlide>
  );
};

export default Sidebar;
