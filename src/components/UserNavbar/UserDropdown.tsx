import { Power } from "react-feather";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Avatar from "../Avatar";

export type DropdownUserType = {
  user: { email: string };
  loading: boolean;
  logout: () => void;
};

const UserDropdown: React.FC<{
  user: DropdownUserType;
  portalName: string;
}> = ({ user, portalName }) => {
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle
          href="/"
          tag="a"
          className="nav-link dropdown-user-link"
          onClick={(e) => e.preventDefault()}
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="fw-bolder text-black">{user.user.email}</span>
            <span className="user-status">{portalName}</span>
          </div>
          <Avatar imgHeight="40" imgWidth="40" status="online" />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem tag="a" href="/login" onClick={user.logout}>
            <Power size={14} className="me-75" />
            <span className="align-middle">Sign Out</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};

export default UserDropdown;
