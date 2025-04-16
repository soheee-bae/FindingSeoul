const Dongjakgu = ({
  width = 218,
  height = 92,
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
      viewBox="0 0 218 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.014 45.0809C48.8083 45.61 2.37298 70.48 1.84572 65.1885C1.31845 59.897 29.3592 64.1302 38.8465 49.3141C44.3051 40.7894 42.4806 27.3834 50.706 22.3276C73.95 8.04044 64.4626 0.737747 68.7319 1.69073C99.5653 8.57323 102.595 4.38167 122.81 1.16156C127.079 0.481487 141.785 20.211 185.427 25.5024C189.394 25.9834 183.055 33.4394 187.799 36.6144C194.914 41.3764 210.125 36.4318 212.94 40.665C216.829 46.5114 217.21 56.0104 214.838 60.2435C207.866 72.6867 211.991 79.4756 209.145 81.5922C206.299 83.7087 188.273 89.5294 188.273 89.5294C171.195 91.1169 163.131 90.0585 159.336 80.5339C155.541 71.0092 152.695 65.1884 144.157 56.7221C135.618 48.2559 103.788 44.7339 82.014 45.0809Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Dongjakgu;
