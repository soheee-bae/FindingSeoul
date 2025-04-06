const Nowongu = ({
  width = 127,
  height = 166,
  fillColor = "#F2EDEA",
  strokeColor = "none",
  className = "",
}: {
  width?: number;
  height?: number;
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 127 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.3222 152.717C74.1565 154.53 69.5056 156.673 63.2524 164.9C56.9992 173.127 -7.48682 132.704 0.72054 127.047C8.9279 121.391 11.6635 118.781 18.6984 108.774C23.4637 101.995 25.0148 94.4715 25.7332 83.5392C26.9054 65.7008 17.7826 65.3833 18.3075 53.9536C18.8584 41.9596 27.2965 39.5959 27.6876 28.2837C27.8109 24.7182 27.6876 24.368 28.4691 21.3224C29.2506 18.2768 49.9796 -0.287638 66.7699 0.00339908C85.4568 0.327309 98.8175 12.6208 109.37 29.154C120.058 45.9002 123.83 78.7178 124.612 85.2796C125.178 90.03 128.52 134.479 126.175 134.879C123.83 135.279 91.0011 144.886 77.3222 152.717Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Nowongu;
