import { Route, Routes } from "react-router-dom";

import MainPage from "../page/mainpage";
import TodoDetail from "../page/todo_detail/[id]";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todo_detail/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
