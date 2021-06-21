import React, { useState } from "react";
import {
  Header as BaseHeader,
  Animation,
  AnimationState,
  AnimationType,
} from "@mango-solution/mango-ui";

import QuarkIcon from "../../svg/quark.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [IconAnimationState, setIconAnimationState] = useState(
    AnimationState.initial
  );
  const handleMouseOver = () => {
    setIconAnimationState(AnimationState.active);
  };

  const handleMouseLeave = () => {
    setIconAnimationState(AnimationState.inactive);
  };
  return (
    <BaseHeader>
      <div className="logo">
        <Animation
          animationType={AnimationType.spin}
          animationState={IconAnimationState}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          classes="header-icon"
        >
          <QuarkIcon />
        </Animation>
        <div className="header-title">夸克量化</div>
      </div>
    </BaseHeader>
  );
};

export default Header;
