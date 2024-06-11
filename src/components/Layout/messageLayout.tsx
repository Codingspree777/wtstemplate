// import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Container = styled.main`
  display: flex;
`;
const MessageContainter = styled.div`
  width: 100%;
`;

const MessageCreation = styled.div``;

const MessageLayout = () => {
  return (
    <Container>
      <Navbar />
      <MessageContainter>
        <Header />
        <MessageCreation>
          <Sidebar />
        </MessageCreation>
      </MessageContainter>
    </Container>
  );
};

export default MessageLayout;
