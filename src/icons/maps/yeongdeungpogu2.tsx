const Yeongdeungpogu2 = ({
  width = 82,
  height = 36,
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
      viewBox="0 0 82 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.1855 8.2795C28.0872 3.86496 6.44886 1.573 2.11127 1.573C-2.22632 1.573 13.083 23.4724 32.9562 29.9466C55.1259 37.169 85.9708 34.709 80.1874 29.9466C74.4039 25.1843 56.2009 14.1234 40.1855 8.2795Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Yeongdeungpogu2;
