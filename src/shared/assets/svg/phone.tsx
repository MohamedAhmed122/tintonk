import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

interface PhoneIconProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  size?: number;
  color?: string;
}

export const PhoneIcon: React.FC<PhoneIconProps> = ({
  size = 14,
  color = '#555B69',
}) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 14 14">
      <Path
        fill={color}
        d="M2.965 6.093a11.361 11.361 0 004.942 4.942l1.65-1.65a.746.746 0 01.765-.18c.84.277 1.748.428 2.678.428.412 0 .75.337.75.75V13c0 .412-.338.75-.75.75C5.957 13.75.25 8.043.25 1 .25.588.588.25 1 .25h2.625c.412 0 .75.338.75.75 0 .938.15 1.837.428 2.678a.753.753 0 01-.188.764l-1.65 1.65z"
      />
    </Svg>
  );
};
