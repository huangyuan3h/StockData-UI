import { Header as BaseHeader } from "@mango-solution/mango-ui";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <BaseHeader>
      <div className="header-icon">quark quatization</div>
    </BaseHeader>
  );
};

export default Header;
