import { Power } from "react-feather";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Avatar from "../Avatar";
import { useUser } from "@/context/UserContext";
import layoutConfig from "@/configs/layoutConfig";

const UserDropdown = () => {
  const { user, logout } = useUser();
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="fw-bolder text-black">{user?.email}</span>
          <span className="user-status">{layoutConfig.app.appPortal}</span>
        </div>
        <Avatar imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="/login" onClick={logout}>
          <Power size={14} className="me-75" />
          <span className="align-middle">Sign Out</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
