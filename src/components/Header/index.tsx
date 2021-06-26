import { useRouter } from "next/dist/client/router";
import React from "react";
import DistractionFreeHeader from "./DistractionFreeHeader";
import HeaderMenu from "./HeaderMenu";

interface HeaderProps {}

enum MenuType {
  homePage = "/",
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <DistractionFreeHeader>
      <div className="header-menu-area">
        <HeaderMenu
          text="首页"
          path="/"
          active={router.pathname === MenuType.homePage}
        />
        <HeaderMenu text="量化" path="/quantity" />
        <HeaderMenu text="任务" path="/task" />
      </div>
    </DistractionFreeHeader>
  );
};

export default Header;
