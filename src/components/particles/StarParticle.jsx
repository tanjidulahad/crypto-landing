import React from 'react';
import { ReactSVG } from 'react-svg';
import star from '../../images/star1.svg';

export default function StarParticle({ className }) {
  return (
    <span className={className}>
      <ReactSVG src={star} />
    </span>
  );
}