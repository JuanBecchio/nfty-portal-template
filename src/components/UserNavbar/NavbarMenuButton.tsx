import { Fragment } from "react";
import { Menu } from "react-feather";
import { NavItem, NavLink } from "reactstrap";

const NavbarMenuButton: React.FC<{
  setMenuVisibility: (value: boolean) => void;
}> = ({ setMenuVisibility }) => {
  return (
    <Fragment>
      <ul className="navbar-nav d-xl-none">
        <NavItem className="mobile-menu me-auto">
          <NavLink
            className="nav-menu-main menu-toggle hidden-xs is-active"
            onClick={() => setMenuVisibility(true)}
          >
            <Menu className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
    </Fragment>
  );
};

export default NavbarMenuButton;
