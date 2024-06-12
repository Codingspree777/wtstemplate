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

import styled from "styled-components";

const CardContainer = styled.div`
  width: 312px;
  margin: 0 auto;

  border: 1px solid RGBA(0, 0, 0, 0.12);
  border-radius: 10px;
  padding-bottom: 16px;
`;

const HeaderContainer = styled.div`
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

const Required = styled.div`
  background-color: #f5f5f5;
  padding: 4px 8px 4px 8px;
  font-weight: 700;
`;

const BodyCard = ({ name, id }: { name: string; id: string }) => {
  return (
    <CardContainer id={id}>
      <HeaderContainer>
        <Text>{name}</Text>
        <Required>REQUIRED</Required>
      </HeaderContainer>
      <CKEditorContext context={Context}>
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [Paragraph, Bold, Italic, Essentials, Strikethrough, Code],
            toolbar: ["bold", "italic", "strikethrough", "code"],
          }}
          data="<p>Hello from the first editor working with the context!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor1 is ready to use!", editor);
          }}
        />
      </CKEditorContext>
    </CardContainer>
  );
};

export default BodyCard;
