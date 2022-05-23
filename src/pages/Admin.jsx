import Header from "../components/admin/Header";
import Content from "../components/admin/Content";
import Sidebar from "../navigations/Sidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div
        style={{ paddingLeft: "200px", height: "100vh" }}
        className="d-flex flex-column"
      >
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Admin;
