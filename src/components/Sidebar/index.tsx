import { useState } from "react";
import { match } from "ts-pattern";

import Slide from "@mui/material/Slide";

import styled from "styled-components";

import BodyCard from "./bodyCard";
import ButtonCard from "./buttonCard";
import HeaderCard from "./headerCard";
import FooterCard from "./footerCard";

import Button from "../../common/button";

const StyledSlide = styled(Slide)`
  box-shadow: 1px 0px 0px 0px #00000014;
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
      name: "Body Message",
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
          return match(card.name)
            .with("Header", () => (
              <HeaderCard name={card.name} id={card.id} key={card.id} />
            ))
            .with("Body Message", () => (
              <BodyCard name={card.name} id={card.id} key={card.id} />
            ))
            .with("Footer text", () => (
              <FooterCard name={card.name} id={card.id} key={card.id} />
            ))
            .with("Buttons", () => (
              <ButtonCard name={card.name} id={card.id} key={card.id} />
            ))
            .otherwise(() => null);
        })}
      </SidebarContainer>
    </StyledSlide>
  );
};

export default Sidebar;
