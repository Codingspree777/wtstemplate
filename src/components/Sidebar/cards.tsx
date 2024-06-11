import { useState } from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

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

const Cards = ({ name, id }: { name: string; id: string }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? setChecked(true) : setChecked(false);
  };
  return (
    <CardContainer>
      <CardButton id={id}>
        <Text>{name}</Text>
        <Switch onChange={handleChange} id={id} />
      </CardButton>
      {checked && <div>Checked</div>}
    </CardContainer>
  );
};

export default Cards;
