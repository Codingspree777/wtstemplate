import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import sortBy from "lodash/sortBy";
import parse from "html-react-parser";
import styled from "styled-components";

import { Button } from "@mui/material";

import { getMessage } from "../../apis/getMessage";

import SectionTags from "../../common/sectionTags";

import messageIcon from "../../assets/message.svg";
import graph from "../../assets/graph.jpeg";

import model from "../../assets/model.jpeg";
import purse from "../../assets/purse.jpeg";
import wallet from "../../assets/wallet.jpeg";

const PreviewMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${`url(${graph})`};
  width: 100%;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 304px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 2px 6px 2px #00000018;
  padding: 12px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const HeaderText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
`;
const MessageIcon = styled.img``;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;

  background-color: #f5f5f5;
  margin: 0 auto;
  padding: 20px 0px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 233px;

  background-color: #ffffff;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
`;

const HeaderImage = styled.img``;

const BodyMessage = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

const FooterMessage = styled.div`
  font: SF Pro Display;
  font-size: 14px;
  line-height: 18px;
  color: #00000054;
`;

const PreviewMessage = () => {
  const [message, setMessage] = useState<
    [
      {
        type: string;
        image?: string;
        text?: string;
        payload?: string;
      }
    ]
  >();

  useEffect(() => {
    getMessage().then((data) => {
      const mapped = data?.components.reduce(
        (
          temp: [],
          component: {
            type: string;
            parameters: Array<{
              image?: { link: string };
              text?: string;
              payload?: string;
            }>;
          }
        ) => {
          if (component.type === "header") {
            return [
              ...temp,
              {
                index: 0,
                type: "header",
                image: component.parameters[0].image?.link,
              },
            ];
          }
          if (component.type === "body") {
            return [
              ...temp,
              { index: 1, type: "body", text: component.parameters[0].text },
            ];
          }
          if (component.type === "footer") {
            return [
              ...temp,
              { index: 2, type: "footer", text: component.parameters[0].text },
            ];
          }
          if (component.type === "button") {
            return [
              ...temp,
              {
                index: 3,
                type: "button",
                sub_type: "quick_reply",
                payload: component.parameters[0].payload,
              },
            ];
          }
          return temp;
        },
        []
      );

      setMessage(sortBy(mapped, "index") as typeof mapped);
    });
  }, []);

  const fetchImage = (image: string) => {
    let link = "";

    if (image.includes("wallet")) {
      link = wallet;
    } else if (image.includes("purse")) {
      link = purse;
    } else if (image.includes("model")) {
      link = model;
    }
    return <HeaderImage src={link} />;
  };

  return (
    <PreviewMessageContainer>
      <DisplayContainer>
        <HeaderContainer>
          <MessageIcon src={messageIcon} />
          <HeaderText>Message Example</HeaderText>
        </HeaderContainer>
        <Display>
          {message && (
            <Message>
              {message.map(
                (section: { type: string; image?: string; text?: string }) => {
                  return match(section.type)
                    .with("header", () => (
                      <SectionContainer key={section.type}>
                        <SectionTags>Header</SectionTags>
                        {fetchImage(section.image as string)}
                      </SectionContainer>
                    ))
                    .with("body", () => (
                      <SectionContainer key={section.type}>
                        <SectionTags>Body</SectionTags>
                        <BodyMessage>
                          {parse(section.text as string)}
                        </BodyMessage>
                      </SectionContainer>
                    ))
                    .with("footer", () => (
                      <SectionContainer key={section.type}>
                        <SectionTags>Footer</SectionTags>
                        <FooterMessage>
                          {parse(section.text as string)}
                        </FooterMessage>
                      </SectionContainer>
                    ))
                    .otherwise(() => null);
                }
              )}
            </Message>
          )}
          {message?.find((section) => section.type === "button") &&
            message.map((section: { type: string; payload?: string }) => {
              return match(section.type)
                .with("button", () => (
                  <SectionContainer key={section.payload}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: 233,
                        boxShadow: "2px 2px 6px 2px #00000018",
                      }}
                    >
                      {section.payload}
                    </Button>
                  </SectionContainer>
                ))
                .otherwise(() => null);
            })}
        </Display>
      </DisplayContainer>
    </PreviewMessageContainer>
  );
};

export default PreviewMessage;
