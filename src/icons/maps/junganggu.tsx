const Junganggu = ({
  width = 89,
  height = 115,
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
      viewBox="0 0 89 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80.8426 91.8228C70.4109 53.3656 75.1526 7.11312 72.3077 2.43576C69.4629 -2.2416 11.6141 19.066 4.97555 27.9007C-1.66298 36.7354 2.13066 68.9565 4.02725 78.8306C6.18295 90.0538 13.9844 111.571 14.933 113.13C15.8815 114.689 21.5713 113.65 32.4773 112.611C50.1882 110.923 88.9037 110.012 87.9553 108.453C87.007 106.894 82.9114 99.4496 80.8426 91.8228Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Junganggu;
