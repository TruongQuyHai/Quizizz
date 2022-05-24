import { Outlet } from "react-router-dom";
import Sidebar from "../navigations/Sidebar";

const AdminTemplate = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminTemplate;
