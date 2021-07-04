import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import { Menu, MenuItem } from "@mango-solution/mango-ui";
import { useState } from "react";

export interface HeaderMenuItemType {
  value: string;
  text: string;
  path: string;
}

interface HeaderMenuProps {
  text: string;
  path: string;
  active?: boolean;
  subMenu?: HeaderMenuItemType[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  text,
  path,
  active,
  subMenu,
}: HeaderMenuProps) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const hasSubMenu = subMenu && subMenu.length > 0;

  const handleClick = () => {
    if (!hasSubMenu) {
      router.push(path);
    }
    setMenuOpen(true);
  };

  const handleMenuItemClick = (val: string) => {
    setMenuOpen(false);

    if (!hasSubMenu) return;

    const currentItem = subMenu.find((i) => i.value === val);

    if (!currentItem) return;

    router.push(`${path}${currentItem.path}`);
  };

  const renderSubMenu = () => {
    if (!hasSubMenu) return <></>;
    return (
      <Menu
        hidden={!menuOpen}
        onClick={handleMenuItemClick}
        setHidden={(hidden) => setMenuOpen(!hidden)}
      >
        {subMenu.map(({ value, text }) => (
          <MenuItem key={value} value={value} label={text} />
        ))}
      </Menu>
    );
  };

  return (
    <>
      <div className={clsx("HeaderMenu", { active })} onClick={handleClick}>
        {text}
      </div>
      {renderSubMenu()}
    </>
  );
};

export default HeaderMenu;
