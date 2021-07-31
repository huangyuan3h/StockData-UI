import clsx from 'clsx';
import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Menu, MenuItem } from '@mango-solution/mango-ui';

export interface HeaderMenuItemType {
  value: string;
  text: string;
  path: string;
}

interface HeaderMenuProps {
  value?: string;
  text: string;
  path: string;
  active?: boolean;
  subMenu?: HeaderMenuItemType[];
}

const defaultProps = {
  value: undefined,
  active: false,
  subMenu: undefined,
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  value,
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
        {subMenu.map(({ value: v, text: t }) => (
          <MenuItem key={v} value={v} label={t} />
        ))}
      </Menu>
    );
  };

  return (
    <>
      <div
        className={clsx('HeaderMenu', { active }, value)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={() => undefined}
      >
        {text}
      </div>
      {renderSubMenu()}
    </>
  );
};

HeaderMenu.defaultProps = defaultProps;

export default HeaderMenu;
