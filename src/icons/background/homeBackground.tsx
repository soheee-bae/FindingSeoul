const HomeBackground = ({
  width = 1351,
  height = 811,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 1351 811"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M554.072 112.042C393.568 112.042 81.0543 26.3401 13.8501 200.124C-89.4879 467.347 412.967 669.627 608.271 756.591C789.993 837.507 1138.18 833.807 1258.6 707.193C1379.01 580.58 1384.56 306.25 1258.6 152.208C999.206 -165.007 751.327 112.042 554.072 112.042Z"
        fill="#F4F6F8"
      />
    </svg>
  );
};

export default HomeBackground;
