import { BrowserRouter } from "react-router-dom";
import CardPage from "./components/CardPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CardPage />
      </BrowserRouter>
    </>
  );
};

export default App;
