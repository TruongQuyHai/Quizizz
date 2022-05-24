import styled from "styled-components";
import Badge from "../components/admin/Badge";
import {
  ButtonIconBoxShadow,
  ButtonIconPillSmall,
} from "../components/admin/Button";
import Icon from "../components/admin/Icon";
import Logo from "../components/admin/Logo";
import Name from "../components/admin/Name";
import Navbar from "./Navbar";

const SidebarStyle = styled.div`
  width: 200px;
  height: 100vh;
  overflow: hidden;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.05))
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
  background: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const Sidebar = () => {
  return (
    <SidebarStyle className="d-flex flex-column">
      <div className="ml-0.75 mt-0.5">
        <Logo />
      </div>

      <div className="p-1 pb-0.5">
        <Name name="Hải Quý" /> <br />
        <Badge type="Basic account" />
        <ButtonIconPillSmall
          style={{
            background: "rgba(255, 164, 2, 0.2)",
            color: "rgba(206, 132, 0, 1)",
            width: "100%",
          }}
          className="py-0.375 px-1 mb-1 text-xs h-2 center-item"
          content="Upgrade to super"
          iconRight={<Icon className="fas fa-bolt ml-0.5" fs="11px" />}
        />
      </div>

      <div className="d-flex justify-center">
        <ButtonIconBoxShadow
          style={{
            background: "rgba(136,84,192,1)",
            color: "#FFFFFF",
          }}
          className="py-0.625 px-1 mb-1.75 text-lg font-medium"
          iconLeft={<Icon className="fas fa-plus-circle mr-0.5" fs="16px" />}
          iconRight={<Icon className="fas fa-caret-down ml-auto" fs="16px" />}
          content="Create"
        />
      </div>

      <div
        style={{
          flex: "1 1",
          overflowY: "auto",
        }}
      >
        <Navbar />
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
