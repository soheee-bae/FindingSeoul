const Dobonggu = ({
  width = 133,
  height = 145,
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
      viewBox="0 0 133 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M131.096 34.3249C131.737 31.6736 131.566 31.1616 131.566 27.9984C131.566 24.8352 119.334 39.5968 96.753 38.0152C81.5825 36.9527 71.3707 28.634 60.5285 18.5088C52.0604 10.6008 46.2813 1.39081 34.1834 1.11114C15.192 0.672117 5.95653 31.1616 3.6043 38.0152C2.64402 40.8132 4.90832 46.6867 5.48613 49.6137C8.60203 65.3977 -0.159197 77.5554 1.72266 87.5723C3.50546 97.0618 21.0136 106.084 35.5948 109.715C44.0628 111.824 48.297 109.188 79.817 127.64C92.8869 135.291 96.2825 145.564 101.457 143.456C106.632 141.347 112.629 136.808 121.216 125.531C127.033 117.892 129.317 109.414 129.684 97.0619C130.201 79.6664 119.635 73.5658 120.275 60.685C120.948 47.1682 128.408 45.4426 131.096 34.3249Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Dobonggu;
