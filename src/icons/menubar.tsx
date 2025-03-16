const Menubar = ({
  width = 24,
  height = 24,
  strokeColor = "black",
  strokeWidth = 2,
}: {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Menubar;
