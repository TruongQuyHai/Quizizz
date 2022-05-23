import styled from "styled-components";
import Icon from "../components/admin/Icon";
import TabLink from "../components/admin/TabLink";

const NavStyle = styled.nav`
  width: 100%;
  overflow-y: auto;
`;

const Navbar = () => {
  return (
    <NavStyle>
      <TabLink
        $active
        to="/admin"
        icon={<Icon className="fas fa-map-marked-alt w-4" fs="12px" />}
      >
        Explore
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-book w-4" fs="12px" />}
      >
        My library
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-chart-line w-4" fs="12px" />}
      >
        Reports
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-users w-4" fs="12px" />}
      >
        Classes
      </TabLink>
      <TabLink to="/admin" icon={<Icon className="fas fa-cog w-4" fs="12px" />}>
        Settings
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-image w-4" fs="12px" />}
      >
        Memes
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-folder w-4" fs="12px" />}
      >
        Collections
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-user-circle w-4" fs="12px" />}
      >
        Profile
      </TabLink>
      <TabLink
        to="/admin"
        icon={<Icon className="fas fa-sign-out-alt w-4" fs="12px" />}
      >
        Log out
      </TabLink>
    </NavStyle>
  );
};
export default Navbar;
