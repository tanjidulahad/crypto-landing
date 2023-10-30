import React from 'react';
import orangeCircle from '../../images/circle3.svg';
import { ReactSVG } from 'react-svg';

export default function OrangeCircleParticle({ className }) {
  return (
    <span className={className}>
      <ReactSVG src={orangeCircle} />
    </span>
  );
}