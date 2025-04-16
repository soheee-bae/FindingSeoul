const Seongdonggu = ({
  width = 177,
  height = 104,
  fillColor = "none",
  strokeColor = "#97ACC1",
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
      viewBox="0 0 177 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M142.027 67.2054C138.286 74.6553 129.401 98.6016 129.4 102.859C129.4 102.859 89.564 87.8385 71.4109 85.8303C37.7396 82.1053 20.4362 93.8124 18.5656 91.6838C16.695 89.5553 15.292 75.7196 9.21239 67.2054C6.05003 62.7766 4.53574 60.2878 1.26223 56.0306C0.0346845 54.4342 4.18983 50.6862 9.21239 47.0767C18.0978 40.691 24.825 37.4982 32.5953 24.7269C36.3364 18.5779 36.6486 15.5866 39.6102 5.47746C40.0778 3.88112 44.7544 7.60601 57.8488 6.00959C63.3448 5.33953 66.3962 4.68275 71.8785 3.88104C79.3604 2.78692 83.9859 1.33009 91.5202 1.7525C103.865 2.44461 108.235 4.6527 119.112 11.331C123.082 13.7682 126.582 17.5058 130.803 19.313C138.495 22.6058 141.646 21.633 150.999 21.1009C160.735 20.547 176.871 25.0348 175.699 27.2951C174.526 29.5553 169.488 38.619 166.813 41.6628C158.395 51.2413 150.473 50.3875 142.027 67.2054Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Seongdonggu;
