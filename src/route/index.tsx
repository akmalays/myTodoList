import { Route, Routes } from "react-router-dom";

import MainPage from "../page/mainpage";
import TodoDetail from "../page/todo_detail";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todo_detail" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
