const Junganggu = ({
  width = 72,
  height = 92,
  fillColor = "#F2EDEA",
  strokeColor = "none",
}: {
  width?: number;
  height?: number;
  fillColor?: string;
  strokeColor?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.0828 73.869C57.4252 42.3221 61.3604 4.3806 58.9994 0.543712C56.6384 -3.29318 8.62808 14.1857 3.11858 21.4329C-2.39092 28.6801 0.757526 55.1115 2.33156 63.2113C4.12064 72.4179 10.5953 90.0688 11.3825 91.3478C12.1697 92.6268 16.8919 91.7741 25.943 90.9215C40.6418 89.5369 72.7729 88.79 71.9858 87.511C71.1987 86.2321 67.7997 80.1254 66.0828 73.869Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Junganggu;
