import { DateDataProvider } from "./contexts/dateDataContext";
import MessageLayout from "./components/Layout/messageLayout";

function App() {
  return (
    <DateDataProvider>
      <MessageLayout />
    </DateDataProvider>
  );
}

export default App;
