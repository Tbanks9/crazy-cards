import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "../EligibleCards/Cards";
import EligibleCards from "../EligibleCards";

const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Cards userSubmission={undefined} hasSubmitted={false} />}
      />
      <Route path="/eligible-cards" element={<EligibleCards />} />
    </Routes>
  );
};

export default App;
