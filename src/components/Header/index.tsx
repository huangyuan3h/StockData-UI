import { Header as BaseHeader } from "@mango-solution/mango-ui";

import QuarkIcon from "../../svg/quark.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <BaseHeader>
      <div className="header-icon">
        <QuarkIcon />
      </div>
    </BaseHeader>
  );
};

export default Header;
