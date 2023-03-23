import classNames from "classnames";
import { useState, memo, useMemo } from "react";
import { Navbar } from "reactstrap";
import Footer from "./Footer";
import ScrollTopArrow from "./ScrollTopArrow";
import NavbarMenuButton from "./UserNavbar/NavbarMenuButton";
import BrandLogo from "./BrandLogo";
import UserDropdown, { DropdownUserType } from "./UserNavbar/UserDropdown";
import { TEMPLATE_DEFAULT_CONFIG } from "../contexts/NFTYTemplateContext";

type Route = {
  id: string;
  title: string;
  icon: JSX.Element;
  navLink: string;
  element: JSX.Element;
  childElements?: {
    path: string;
    element: JSX.Element;
  }[];
};

type LinkItemProps = {
  navLink: string;
  externalLink?: boolean;
  newTab?: boolean;
  icon?: JSX.Element;
  title?: string;
  badge?: string;
  badgeText?: string;
  disabled?: boolean;
};

const Sidebar: React.FC<{
  sideRoutes: Route[];
  LinkItem: React.FC<LinkItemProps>;
}> = ({ sideRoutes, LinkItem }) => {
  const RenderNavItems = useMemo(
    () =>
      sideRoutes?.map((item) => {
        return <LinkItem {...item} key={item.id} />;
      }),
    []
  );
  return (
    <div className="main-menu menu-fixed menu-accordion menu-light">
      <div className="navbar-header main-menu">
        <BrandLogo />
      </div>
      <div className="main-menu-content">
        <ul className="navigation navigation-main">{RenderNavItems}</ul>
      </div>
    </div>
  );
};

const NavbarWrapper: React.FC<{
  pageRoutes: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
  sideRoutes: Route[];
  sidebarLinkItem: React.FC<LinkItemProps>;
  user: DropdownUserType;
}> = ({ pageRoutes, sideRoutes, sidebarLinkItem, user }) => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <div
      className={`wrapper vertical-layout navbar-floating footer-static vertical-menu-modern menu-${
        menuVisibility ? "open" : "collapsed"
      }`}
    >
      <Sidebar sideRoutes={sideRoutes} LinkItem={sidebarLinkItem} />

      <Navbar
        expand="lg"
        container={false}
        light={true}
        className="header-navbar navbar align-items-center floating-nav navbar-shadow"
      >
        <div className="navbar-container d-flex content align-items-center">
          <NavbarMenuButton
            setMenuVisibility={(value) => setMenuVisibility(value)}
          />
          <UserDropdown
            user={user}
            portalName={TEMPLATE_DEFAULT_CONFIG.appPortal}
          />
        </div>
      </Navbar>
      <div
        className={classNames("sidenav-overlay", {
          show: menuVisibility,
        })}
        onClick={() => setMenuVisibility(false)}
      />
      <div className="app-content content overflow-hidden">
        {pageRoutes}
        <ScrollTopArrow />
      </div>
      <Footer />
    </div>
  );
};

export default memo(NavbarWrapper);
