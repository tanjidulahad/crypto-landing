import React from 'react';
import { ReactSVG } from 'react-svg';

import blueCircle from '../../images/circle1.svg';

export default function BlueCircleParticle({ className }) {
  return (
    <span className={className}>
      <ReactSVG src={blueCircle} />
    </span>
  );
}