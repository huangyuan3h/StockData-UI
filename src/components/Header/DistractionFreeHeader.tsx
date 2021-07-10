import React, { ReactNode, useState } from 'react';
import {
  Header as BaseHeader,
  Animation,
  AnimationState,
  AnimationType,
} from '@mango-solution/mango-ui';

import QuarkIcon from '../../svg/quark.svg';

interface DistractionFreeHeaderProps {
  children?: ReactNode;
}

const defaultProps = {
  children: null,
};

const DistractionFreeHeader: React.FC<DistractionFreeHeaderProps> = ({
  children,
}: DistractionFreeHeaderProps) => {
  const [IconAnimationState, setIconAnimationState] = useState(
    AnimationState.initial,
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
      {children}
    </BaseHeader>
  );
};

DistractionFreeHeader.defaultProps = defaultProps;

export default DistractionFreeHeader;
