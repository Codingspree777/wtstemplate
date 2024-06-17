import { useState } from "react";
import { match } from "ts-pattern";

import { editMessage } from "../../apis/editMessage";
// import { createMessage } from "../../apis/createMessage";

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
  const [headerText, setHeaderText] = useState<string>();
  const [bodyText, setBodyText] = useState<string>("");
  const [footerText, setFooterText] = useState<string>("");
  const [buttons, setButton] = useState<
    Array<{ id: number; name: string; text: string }>
  >([
    { id: 1, name: "Button 1", text: "" },
    { id: 2, name: "Button 2", text: "" },
    { id: 3, name: "Button 3", text: "" },
  ]);

  const handleSave = () => {
    if (bodyText === "") {
      return alert("Please enter a body message");
    }

    const message = {
      header: headerText,
      body: bodyText,
      footer: footerText,
      buttons: buttons,
    };
    editMessage(message);
    // createMessage(message);
  };

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
                <HeaderCard
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  setHeaderText={setHeaderText}
                />
              ))
              .with("Body Message", () => (
                <BodyCard
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  setBodyText={setBodyText}
                />
              ))
              .with("Footer text", () => (
                <FooterCard
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  setFooterText={setFooterText}
                />
              ))
              .with("Buttons", () => (
                <ButtonCard
                  buttons={buttons}
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  setButton={setButton}
                />
              ))
              .otherwise(() => null);
          })}
          <ButtonContainer>
            <SaveButton variant="contained" onClick={handleSave}>
              Save
            </SaveButton>
            <DeteleButton variant="outlined">Delete</DeteleButton>
          </ButtonContainer>
        </SidebarContainer>
      </StyledSlide>
      {!open && <div>Edit Message</div>}
    </>
  );
};

export default Sidebar;
