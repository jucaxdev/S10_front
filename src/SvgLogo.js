// SvgLogo.js

import React from 'react';
import logo from './assets/svg/logo.png'; // Importa la imagen del logo

const SvgLogo = ({ width, height, style }) => {
  return <img src={logo} alt="Logo" width={width} height={height} style={style} />;
};

export default SvgLogo; // Exporta el componente SvgLogo por defecto
