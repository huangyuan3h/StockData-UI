import { useRouter } from "next/dist/client/router";
import React from "react";
import DistractionFreeHeader from "./DistractionFreeHeader";
import HeaderMenu, { HeaderMenuItemType } from "./HeaderMenu";

interface HeaderProps {}

enum MenuType {
  homePage = "/",
}

const quantityMenu: HeaderMenuItemType[] = [
  {
    value: "stockData",
    text: "大盘数据",
    path: "/stockData",
  },
  {
    value: "methodology",
    text: "算法",
    path: "/methodology",
  },
  {
    value: "results",
    text: "预测结果",
    path: "/results",
  },
];

const taskMenu: HeaderMenuItemType[] = [
  {
    value: "taskManagement",
    text: "任务管理",
    path: "/taskManagement",
  },
  {
    value: "newTask",
    text: "新增",
    path: "/newTask",
  },
];

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();

  const isActive = (subMenu: HeaderMenuItemType[]): boolean => {
    const menu = subMenu.find((i) => {
      return router.pathname.indexOf(i.path) >= 0;
    });

    return !!menu;
  };

  return (
    <DistractionFreeHeader>
      <div className="header-menu-area">
        <HeaderMenu
          text="首页"
          path="/"
          active={router.pathname === MenuType.homePage}
        />
        <HeaderMenu
          text="量化"
          path="/quantity"
          subMenu={quantityMenu}
          active={isActive(quantityMenu)}
        />
        <HeaderMenu
          text="任务"
          path="/task"
          subMenu={taskMenu}
          active={isActive(taskMenu)}
        />
      </div>
    </DistractionFreeHeader>
  );
};

export default Header;
