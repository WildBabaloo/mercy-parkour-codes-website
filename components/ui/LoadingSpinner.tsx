const LoadingSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="blue"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="250"
        strokeDashoffset="0"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;250"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default LoadingSpinner;
