import { Route, Routes } from "react-router-dom";
import MainPage from "../page/mainpage";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
