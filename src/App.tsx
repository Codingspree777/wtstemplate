import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <MessageLayout />
    </QueryClientProvider>
  );
}

export default App;
