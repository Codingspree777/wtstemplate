import DateDisplay from "./components/dateDataDisplay";
import { DateDataProvider } from "./contexts/dateDataContext";

function App() {
  return (
    <DateDataProvider>
      <DateDisplay />
    </DateDataProvider>
  );
}

export default App;
