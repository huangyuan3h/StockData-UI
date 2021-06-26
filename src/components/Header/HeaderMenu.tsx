import clsx from "clsx";
import { useRouter } from "next/dist/client/router";

interface HeaderMenuProps {
  text: string;
  path: string;
  active?: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  text,
  path,
  active,
}: HeaderMenuProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div className={clsx("HeaderMenu", { active })} onClick={handleClick}>
      {text}
    </div>
  );
};

export default HeaderMenu;
