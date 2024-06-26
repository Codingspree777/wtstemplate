import { useState } from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Context } from "@ckeditor/ckeditor5-core";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
} from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

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

const EditorContainer = styled.div`
  .ck-editor__editable {
    min-height: 338px;
  }
  padding: 16px 24px;
`;

const VariableTipBox = styled.div`
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
  margin: 16px 24px;
`;

type FooterCardProps = {
  id: string;
  name: string;
  setFooterText: (footerText: string) => void;
};

const FooterCard = ({ id, name, setFooterText }: FooterCardProps) => {
  const [checked, setChecked] = useState(false);

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
        <>
          <EditorContainer>
            <CKEditorContext context={Context}>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  plugins: [
                    Paragraph,
                    Bold,
                    Italic,
                    Essentials,
                    Strikethrough,
                    Code,
                  ],
                  toolbar: ["bold", "italic", "strikethrough", "code"],
                }}
                data=""
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFooterText(data);
                }}
              />
            </CKEditorContext>
          </EditorContainer>
          <VariableTipBox>
            Variables are dynamic content that help personalize your campaign,
            for example: customer names or coupon codes.
          </VariableTipBox>
        </>
      )}
    </CardContainer>
  );
};

export default FooterCard;
