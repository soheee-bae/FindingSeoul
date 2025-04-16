const Ganseogu = ({
  width = 310,
  height = 216,
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
      viewBox="0 0 310 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70.6014 76.926C56.4747 101.745 9.38566 94.352 2.79319 121.811C-3.79928 149.27 7.50213 161.944 41.4062 187.29C41.4062 187.29 65.8925 207.885 87.0826 212.637C102.123 216.011 118.161 211.803 128.992 214.749C139.822 217.695 143.776 193.937 144.17 181.401C144.593 167.942 136.636 162.391 137.578 152.815C138.539 143.036 148.408 142.782 156.413 142.151C180.545 140.25 182.665 174.603 206.328 180.242C217.673 182.946 224.091 182.013 235.522 179.817C255.938 175.895 264.296 147.47 275.078 140.74C278.422 138.653 289.675 137.044 295.326 139.996C300.977 142.948 309.445 138.247 308.982 131.235C308.04 116.978 279.897 123.233 221.396 78.4292C162.896 33.6252 153.008 -12.3157 109.214 4.58199C65.4208 21.4797 84.7282 52.1072 70.6014 76.926Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Ganseogu;
