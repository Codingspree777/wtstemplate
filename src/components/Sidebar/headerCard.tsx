import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  align-items: center;
  height: 373px;
`;

const SelectContainer = styled.div``;

const StyledSelect = styled(Select)`
  width: 264px;
  height: 45px;
  border-radius: 10px;
  background: white;
  border: 1px solid RGBA(0, 0, 0, 0.12);
`;

const Caption = styled.div`
  font-size: 12px;
  color: RGBA(0, 0, 0, 0.54);
`;

const HeaderCard = ({ name, id }: { name: string; id: string }) => {
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("Image");

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <CardContainer>
      <CardButton id={id}>
        <Text>{name}</Text>
        <Switch onChange={handleChange} id={id} />
      </CardButton>
      {checked && (
        <ContentContainer>
          <SelectContainer>
            <StyledSelect
              sx={{ borderRadius: 10, border: "1px solid RGBA(0, 0, 0, 0.12)" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              label="Files"
              onChange={(event) => setSelectValue(event.target.value as string)}
            >
              <MenuItem value={"Image"}>Image</MenuItem>
              <MenuItem value={"Video"}>Video</MenuItem>
            </StyledSelect>
          </SelectContainer>
          <Caption>Image size recommendation: 800 x 418 pixel.</Caption>
        </ContentContainer>
      )}
    </CardContainer>
  );
};

export default HeaderCard;
