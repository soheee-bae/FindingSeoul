const DistrictImgBackground = ({
  width = 272,
  height = 286,
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
      viewBox="0 0 272 286"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M131.31 238.655C162.381 255.418 210.613 310.793 248.496 271.71C306.746 211.613 238.429 105.474 213.068 62.0062C189.47 21.5611 121.537 -13.8227 80.1044 7.1891C38.6718 28.2009 -1.66473 100.397 0.672554 154.417C5.48568 265.66 93.1238 218.053 131.31 238.655Z"
        fill="#F4F6F8"
      />
    </svg>
  );
};

export default DistrictImgBackground;
