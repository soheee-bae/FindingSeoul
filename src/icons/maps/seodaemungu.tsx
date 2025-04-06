const Seodaemungu = ({
  width = 115,
  height = 64,
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
      viewBox="0 0 115 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9354 30.1641C1.95281 34.5022 4.76762e-05 39.7896 0 40.6708C-4.76761e-05 41.5521 25.3077 54.7705 51.2528 59.6172C79.5912 64.911 99.5934 60.4984 105.452 62.7015C111.848 65.1068 109 64.0554 114.044 60.4984C117.169 58.2954 112.091 60.0577 106.624 50.3643C101.653 41.5521 101.699 36.7696 105.741 26.1306C108.084 19.962 112.482 8.94672 108.576 4.54059C104.671 0.134466 98.4218 -0.306148 94.1256 0.134466C89.8294 0.57508 84.1076 9.08097 75.7688 12.5396C68.8246 15.4197 63.9626 12.7332 57.0218 15.6238C49.0848 18.9294 45.6955 26.1986 37.4937 28.8422C26.3479 32.4349 21.5919 25.0176 10.9354 30.1641Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Seodaemungu;
