import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminTemplate from "./templates/AdminTemplate";

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminTemplate />}>
        <Route index element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
