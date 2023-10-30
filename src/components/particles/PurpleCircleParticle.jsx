import React from 'react';
import purpleCircle from '../../images/circle2.svg';
import { ReactSVG } from 'react-svg';

export default function PurpleCircleParticle({ className }) {
  return (
    <span className={className}>
      <ReactSVG src={purpleCircle} />
    </span>
  );
}
