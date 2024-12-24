import React from 'react';

interface PesaSaltarinaConfigurableProps {
  animationDuration?: number; // duración de la animación en milisegundos
  isAnimationActive?: boolean; // controla si la animación está activa o no
}

const PesaSaltarinaConfigurable: React.FC<PesaSaltarinaConfigurableProps> = ({
  animationDuration = 500, // valor por defecto de 500ms
  isAnimationActive = true, // animación activa por defecto
}) => {
  const animationAttributes = isAnimationActive
    ? {
        attributeName: "cy",
        values: "100; 80; 100",
        dur: `${animationDuration}ms`,
        repeatCount: "indefinite",
      }
    : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="400px"
      height="400px"
      aria-label="Animación de pesa saltarina"
    >
      <defs>
        <filter id="shadow" x="-20%" y="0" width="140%" height="130%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="10" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <g filter="url(#shadow)">
        {/* Barra (detrás de las bolas) */}
        <rect x="50" y={isAnimationActive ? "95" : "90"} width="100" height="10" fill="#666">
          {isAnimationActive && (
            <animate
              attributeName="y"
              values="95; 75; 95"
              dur={`${animationDuration}ms`}
              repeatCount="indefinite"
            />
          )}
        </rect>

        {/* Bola izquierda */}
        <circle cx="50" cy="100" r="30" fill="#333">
          <animate {...animationAttributes} />
        </circle>

        {/* Bola derecha */}
        <circle cx="150" cy="100" r="30" fill="#333">
          <animate {...animationAttributes} />
        </circle>
      </g>

      {/* Sombra */}
      <ellipse cx="100" cy="160" rx="70" ry={isAnimationActive ? "10" : "7"} fill="#0002">
        {isAnimationActive && (
          <>
            <animate
              attributeName="ry"
              values="10; 5; 10"
              dur={`${animationDuration}ms`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2; 0.5; 0.2"
              dur={`${animationDuration}ms`}
              repeatCount="indefinite"
            />
          </>
        )}
      </ellipse>
    </svg>
  );
};

export default PesaSaltarinaConfigurable;

