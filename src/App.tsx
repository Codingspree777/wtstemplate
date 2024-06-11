import { Global, css } from "@emotion/react";

import { DateDataProvider } from "./contexts/dateDataContext";
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
    <DateDataProvider>
      <GlobalStyles />
      <MessageLayout />
    </DateDataProvider>
  );
}

export default App;
