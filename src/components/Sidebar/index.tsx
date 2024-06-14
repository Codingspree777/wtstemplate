import { useState } from "react";
import { match } from "ts-pattern";

import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";

import styled from "styled-components";

import BodyCard from "./bodyCard";
import ButtonCard from "./buttonCard";
import HeaderCard from "./headerCard";
import FooterCard from "./footerCard";

import CloseButton from "../../common/button";

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: sticky;
  bottom: 0;
  background-color: white;
  padding-bottom: 24px;
`;

const SaveButton = styled(Button)`
  width: 312px;
`;
const DeteleButton = styled(Button)`
  width: 312px;
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
    <>
      <StyledSlide direction="right" in={open} mountOnEnter unmountOnExit>
        <SidebarContainer>
          <SidebarHeader>
            <HeaderText>Edit Message</HeaderText>
            <CloseButton onClick={toggleDrawer(false)} />
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
          <ButtonContainer>
            <SaveButton variant="contained">Save</SaveButton>
            <DeteleButton variant="outlined">Delete</DeteleButton>
          </ButtonContainer>
        </SidebarContainer>
      </StyledSlide>
      {!open && <div>Edit Message</div>}
    </>
  );
};

export default Sidebar;
