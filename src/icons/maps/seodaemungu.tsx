const Seodaemungu = ({
  width = 141,
  height = 81,
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
      viewBox="0 0 141 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2689 38.2778C3.44552 43.5662 1.09259 50.0118 1.09253 51.0861C1.09247 52.1603 31.5864 68.2742 62.8483 74.1826C96.9939 80.636 121.095 75.2568 128.154 77.9425C135.861 80.8746 132.429 79.5929 138.507 75.2568C142.272 72.5712 136.154 74.7196 129.566 62.9029C123.576 52.1603 123.632 46.3302 128.502 33.3608C131.326 25.841 136.625 12.4128 131.919 7.04155C127.213 1.67027 119.683 1.13314 114.507 1.67027C109.33 2.2074 102.436 12.5765 92.3882 16.7927C84.021 20.3037 78.1626 17.0287 69.7995 20.5526C60.236 24.5822 56.1521 33.4437 46.2696 36.6664C32.8397 41.046 27.1091 32.0039 14.2689 38.2778Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Seodaemungu;
