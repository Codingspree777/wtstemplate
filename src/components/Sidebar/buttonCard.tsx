import { useState } from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 312px;
  margin: 0 auto;

  border: 1px solid RGBA(0, 0, 0, 0.12);
  border-radius: 10px;
  padding-bottom: 24px;
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
`;

const StyledInputField = styled.input`
  width: 240px;
  height: 15px;
  border: 1px solid RGBA(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 16px;
`;

const ButtonCard = ({ name, id }: { name: string; id: string }) => {
  const [checked, setChecked] = useState(false);
  const [buttons, setButton] = useState<Array<{ id: number; name: string }>>([
    { id: 1, name: "Button 1" },
    { id: 2, name: "Button 2" },
    { id: 3, name: "Button 3" },
  ]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <CardContainer>
      <CardButton id={id}>
        <Text>{name}</Text>
        <Switch onChange={handleChange} id={id} />
      </CardButton>
      <TextFieldContainer>
        {checked &&
          buttons.map((button) => (
            <StyledInputField
              type="text"
              maxLength={25}
              key={button.id}
              placeholder="Enter text"
            />
          ))}
      </TextFieldContainer>
    </CardContainer>
  );
};

export default ButtonCard;
