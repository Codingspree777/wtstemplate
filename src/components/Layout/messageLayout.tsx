import styled from "styled-components";
import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import PreviewMessage from "../PreviewMessage";

const Container = styled.main`
  display: flex;
`;
const MessageContainter = styled.div`
  width: 100%;
`;

const MessageCreation = styled.div`
  display: flex;
`;

const MessageLayout = () => {
  return (
    <Container>
      <Navbar />
      <MessageContainter>
        <Header />
        <MessageCreation>
          <Sidebar />
          <PreviewMessage />
        </MessageCreation>
      </MessageContainter>
    </Container>
  );
};

export default MessageLayout;
