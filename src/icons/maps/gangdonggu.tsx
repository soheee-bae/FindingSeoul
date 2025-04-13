const Gangdonggu = ({
  width = 210,
  height = 198,
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
      viewBox="0 0 210 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9676 114.165C17.1727 107.857 13.2371 101.742 1.85204 100.134C0.440183 99.9341 9.87259 87.8931 17.1724 70.1995C21.186 60.4712 22.628 58.4037 24.2879 47.1442C24.3669 46.6081 34.7243 47.1442 62.237 36.4208C93.1008 24.3913 122.436 0.168025 138.135 1.03358C158.058 2.13199 179.498 29.9952 193.636 58.4036C207.211 85.6803 212.136 116.31 206.918 134.003C200.65 155.258 171.875 152.109 147.148 156.522C138.135 158.131 133.866 162.42 130.545 166.173C122.301 175.492 121.532 191.91 121.532 194.591C121.532 196.199 116.657 197.254 108.725 193.518C97.3399 188.157 97.2416 172.072 87.8526 164.565C68.4041 149.016 38.0444 161.348 27.6084 147.944C18.9408 136.811 29.0318 127.569 20.9676 114.165Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gangdonggu;
