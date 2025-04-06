const Gwangjingu = ({
  width = 151,
  height = 94,
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
      viewBox="0 0 151 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96.2499 85.2917C126.728 74.3569 154.862 8.31047 150.564 9.62265C146.265 10.9348 129.974 10.4637 122.821 5.68611C120.119 3.88187 116.96 0 116.96 0C116.96 0 55.8079 3.06175 50.5328 5.68611C45.2578 8.31047 34.4651 35.8663 27.4317 43.7393C20.3983 51.6124 14.5603 51.348 7.50365 65.1716C4.37772 71.2951 -1.82704 86.1665 0.517333 89.2282C2.8617 92.29 55.2216 100.012 96.2499 85.2917Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Gwangjingu;
