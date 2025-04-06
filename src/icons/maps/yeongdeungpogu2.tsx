const Yeongdeungpogu2 = ({
  width = 66,
  height = 27,
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
      viewBox="0 0 66 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.2129 5.50142C22.1722 1.88013 4.21397 0 0.614088 0C-2.9858 0 9.71984 17.9644 26.2132 23.2753C44.6124 29.1999 70.2114 27.1818 65.4116 23.2753C60.6118 19.3687 45.5046 10.2952 32.2129 5.50142Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Yeongdeungpogu2;
