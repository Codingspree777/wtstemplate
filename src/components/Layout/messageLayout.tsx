// import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import Navbar from "../Navbar";

const Container = styled.main`
  display: flex;
`;
const MessageContainter = styled.div`
  width: 100%;
`;

const MessageLayout = () => {
  return (
    <Container>
      <Navbar />
      <MessageContainter>
        <Header />
      </MessageContainter>
    </Container>
  );
};

export default MessageLayout;
