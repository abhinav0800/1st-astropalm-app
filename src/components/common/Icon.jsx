import React from 'react';
import * as Icons from '../../assets/icons/svgIcons';

const Icon = ({ name, size = 24, color = "currentColor" }) => {
  const SvgIcon = Icons[name];
  return SvgIcon ? <SvgIcon size={size} color={color} /> : null;
};
export default Icon;
