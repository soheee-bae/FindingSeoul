const ChevronLeft = ({
  width = 16,
  height = 16,
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
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.75L6 8.5L10 4.25"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;
