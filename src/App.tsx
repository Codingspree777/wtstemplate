import { DateDataProvider } from "./contexts/dateDataContext";

function App() {
  return (
    <DateDataProvider>
      <div>Hello world</div>
    </DateDataProvider>
  );
}

export default App;
