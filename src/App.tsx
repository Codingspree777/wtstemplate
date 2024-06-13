import { Global, css } from "@emotion/react";

import MessageLayout from "./components/Layout/messageLayout";

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Apply global styles */
      body {
        font-family: "Roboto", sans-serif;
      }
    `}
  />
);

function App() {
  return (
    <>
      <GlobalStyles />
      <MessageLayout />
    </>
  );
}

export default App;
