const Yongsangu = ({
  width = 204,
  height = 98,
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
      viewBox="0 0 204 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M195.189 34.2937C198.65 39.7139 202.274 52.7874 202.274 55.4294C202.274 57.543 189.521 62.8269 174.407 71.8095C152.835 84.6294 133.899 90.7679 115.837 94.5304C47.3489 108.797 0.379266 56.4862 1.05929 54.3726C6.32958 37.9921 11.4524 53.3158 42.6265 28.4814C49.8948 22.6912 54.6321 16.501 56.7966 6.81723C57.7414 2.5902 69.5496 7.8742 93.1664 5.2321C103.321 4.09605 106.606 1.20773 116.783 2.06186C129.93 3.16522 134.732 7.34577 147.013 11.5729C160.254 16.1307 170.724 10.8137 182.909 18.9919C187.632 22.1623 192.828 30.5951 195.189 34.2937Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Yongsangu;
