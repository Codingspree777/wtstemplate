import { useState } from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

import trashIcon from "../../assets/trash.svg";

const CardContainer = styled.div`
  width: 312px;
  margin: 0 auto;

  border: 1px solid RGBA(0, 0, 0, 0.12);
  border-radius: 10px;
`;

const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 24px 0px;
`;

const StyledInputField = styled.input`
  width: 240px;
  height: 15px;
  border: 1px solid RGBA(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 16px;
`;

const FieldRemove = styled.div`
  display: flex;
  justify-content: space-between;
  width: 264px;
`;

const TrashIcon = styled.img``;

type ButtonCardProps = {
  buttons: Array<{ id: number; name: string; text: string }>;
  id: string;
  name: string;
  setButton: (button: any) => void;
};

const ButtonCard = ({ buttons, id, name, setButton }: ButtonCardProps) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    setButton([
      { id: 1, name: "Button 1", text: "" },
      { id: 2, name: "Button 2", text: "" },
      { id: 3, name: "Button 3", text: "" },
    ]);
  };

  const handleTextField = (event: any) => {
    const newText = buttons.map((button) => {
      if (button.id === parseInt(event.target.id)) {
        return { ...button, text: event.target.value };
      }
      return button;
    });
    setButton(newText);
  };

  return (
    <CardContainer>
      <CardButton id={id}>
        <Text>{name}</Text>
        <Switch onChange={handleToggle} id={id} />
      </CardButton>
      {checked &&
        buttons.map((button) => (
          <TextFieldContainer key={button.id}>
            <FieldRemove>
              <Text>{button.name}</Text>
              <TrashIcon
                src={trashIcon}
                alt="remove input field"
                onClick={() =>
                  setButton(buttons.filter((b) => b.id !== button.id))
                }
              />
            </FieldRemove>
            <StyledInputField
              type="text"
              maxLength={25}
              key={button.id}
              id={button.id.toString()}
              placeholder="Enter text"
              onChange={(event) => handleTextField(event)}
            />
          </TextFieldContainer>
        ))}
    </CardContainer>
  );
};

export default ButtonCard;
