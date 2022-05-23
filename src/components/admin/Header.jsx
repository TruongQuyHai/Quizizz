import { ButtonIcon, ButtonTextPrimary } from "./Button";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="p-0.5">
      <div className="d-flex">
        <SearchBar />
        <div style={{ flexShrink: 0 }} className="ml-0.5 pl-0.5">
          <ButtonTextPrimary
            style={{
              height: "100%",
            }}
            className="duration-200 py-0.25 px-1"
          >
            Enter code
          </ButtonTextPrimary>
        </div>
        <ButtonIcon
          iconOnly
          className="ml-0.5"
          style={{ width: 40, height: 40, flexShrink: 0 }}
          icon={<Icon className="fas fa-bell" fs="16px" />}
        />
      </div>
    </header>
  );
};

export default Header;
