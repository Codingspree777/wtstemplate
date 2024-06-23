import styled from "styled-components";

import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import PreviewMessage from "../PreviewMessage";

import usePosts from "../../queries/exampleQuery";

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
  const { status, data, error, isFetching } = usePosts();

  console.log(status, data, error, isFetching);

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
