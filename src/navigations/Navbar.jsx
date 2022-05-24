import styled from "styled-components";
import Icon from "../components/admin/Icon";
import TabLink from "../components/admin/TabLink";

const NavStyle = styled.nav`
  width: 100%;
  overflow-y: auto;
`;

const routes = [
  {
    name: "Explore",
    to: "/admin",
    icon: <Icon className="fas fa-map-marked-alt w-1" fs="12px" />,
    $active: true,
  },
  {
    name: "My library",
    to: "/admin",
    icon: <Icon className="fas fa-book w-1" fs="12px" />,
  },
  {
    name: "Reports",
    to: "/admin",
    icon: <Icon className="fas fa-chart-line w-1" fs="12px" />,
  },
  {
    name: "Classes",
    to: "/admin",
    icon: <Icon className="fas fa-users w-1" fs="12px" />,
  },
  {
    name: "Settings",
    to: "/admin",
    icon: <Icon className="fas fa-cog w-1" fs="12px" />,
  },
  {
    name: "Memes",
    to: "/admin",
    icon: <Icon className="fas fa-image w-1" fs="12px" />,
  },
  {
    name: "Collections",
    to: "/admin",
    icon: <Icon className="fas fa-folder w-1" fs="12px" />,
  },
  {
    name: "Profile",
    to: "/admin",
    icon: <Icon className="fas fa-user-circle w-1" fs="12px" />,
  },
  {
    name: "Log out",
    to: "/admin",
    icon: <Icon className="fas fa-sign-out-alt w-1" fs="12px" />,
  },
];

const Navbar = () => {
  return (
    <NavStyle>
      {routes.map(({ name, to, icon, $active }) => (
        <TabLink key={name} $active={$active} to={to} icon={icon}>
          {name}
        </TabLink>
      ))}
    </NavStyle>
  );
};
export default Navbar;
