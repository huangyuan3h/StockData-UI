import React from "react";
import DistractionFreeHeader from "./DistractionFreeHeader";
import HeaderMenu from "./HeaderMenu";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <DistractionFreeHeader>
      <div className="header-menu-area">
        <HeaderMenu text="首页" path="/" active />
      </div>
    </DistractionFreeHeader>
  );
};

export default Header;
