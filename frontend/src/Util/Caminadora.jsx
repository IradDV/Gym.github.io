import React from 'react';

const Caminadorasvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="400px"
      height="400px"
    >
      {/* Cabeza */}
      <circle cx="100" cy="40" r="15" fill="#000" />
      
      {/* Cuerpo */}
      <rect x="92" y="55" width="16" height="40" fill="#000" />

      {/* Pierna izquierda */}
      <rect x="90" y="95" width="8" height="40" fill="#000">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 95 135; 30 95 135; 0 95 135"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Pierna derecha */}
      <rect x="102" y="95" width="8" height="40" fill="#000">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 105 135; -30 105 135; 0 105 135"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Brazo izquierdo */}
      <rect x="85" y="60" width="8" height="30" fill="#000" />

      {/* Brazo derecho */}
      <rect x="107" y="60" width="8" height="30" fill="#000" />
    </svg>
  );
};

export default Caminadorasvg;
