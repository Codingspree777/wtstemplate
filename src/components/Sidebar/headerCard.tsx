import { useState } from "react";

import { Button } from "@mui/material";
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
  padding-bottom: 16px;
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

const ButtonContainer = styled.div`
  width: 264px;
  position: relative;
  text-align: left;
  margin-bottom: 40px;
`;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const HeaderTipBox = styled.div`
  width: 232px;
  height: 163px
  border-raidus: 8px;
  background-color: #f5f5f5;
  padding: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  leter-spacing: 0.15px;
  color: RGBA(0, 0, 0, 0.54);
`;

type HeaderCardProps = {
  components: Array<any>;
  name: string;
  id: string;
  setComponents: (components: any) => void;
};

const HeaderCard = ({
  components,
  name,
  id,
  setComponents,
}: HeaderCardProps) => {
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("Image");

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleFile = (event: any) => {
    let image = event.target.files[0];
    const imageURL = URL.createObjectURL(image);
    setComponents([
      ...components,
      {
        type: "header",
        parameters: [
          {
            type: "image",
            image: {
              link: imageURL,
            },
          },
        ],
      },
    ]);
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
          <ButtonContainer>
            <Button
              variant="outlined"
              component="label"
              role={undefined}
              sx={{ position: "absolute" }}
            >
              UPLOAD IMAGE
              <VisuallyHiddenInput type="file" onChange={handleFile} />
            </Button>
          </ButtonContainer>
          <HeaderTipBox>
            Images can enrich the message experience and help maintain
            engagement. Use eye-catching images that summarize the message (eg
            discounts, gifts etc.)
          </HeaderTipBox>
        </ContentContainer>
      )}
    </CardContainer>
  );
};

export default HeaderCard;
