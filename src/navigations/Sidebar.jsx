import Badge from "../components/admin/Badge";
import { ButtonBoxShadow, ButtonRounded } from "../components/admin/Button";
import Logo from "../components/admin/Logo";
import Name from "../components/admin/Name";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        overflow: "hidden",
        filter:
          "drop-shadow(0 0 1px rgba(0,0,0,.05)) drop-shadow(0 2px 4px rgba(0,0,0,.08))",
        background: "#FFFFFF",
      }}
      className="d-flex flex-column"
    >
      <div className="ml-0.75 mt-0.5">
        <Logo />
      </div>
      <div className="p-1 pb-0.5">
        <Name /> <br />
        <Badge />
        <ButtonRounded />
      </div>
      <div className="d-flex justify-center">
        <ButtonBoxShadow>Create</ButtonBoxShadow>
      </div>
      <div
        style={{
          flex: "1 1",
          overflowY: "auto",
        }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar;
