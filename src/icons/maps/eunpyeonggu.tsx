const Eunpyeonggu = ({
  width = 182,
  height = 170,
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
      viewBox="0 0 182 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.8894 168.751C44.1583 170.516 -1.14237 142.061 1.5788 141.553C4.41741 141.024 16.9052 148.968 29.492 143.141C39.9003 138.323 44.1583 136.79 54.0935 123.559C60.6058 114.886 72.0716 94.4504 74.9102 66.4003C76.9388 46.3544 86.7378 3.26864 113.705 1.83212C130.737 0.924843 171.424 53.6984 175.682 57.4032C176.685 58.276 168.986 69.0695 170.004 91.275C170.95 111.916 180.412 112.445 180.886 114.562C181.961 119.374 174.846 113.181 170.477 114.033C159.875 116.099 155.977 126.814 145.876 130.969C137.464 134.428 131.574 131.201 123.167 134.673C113.552 138.644 109.447 147.375 99.5113 150.551C86.0099 154.866 80.4878 146.623 67.3401 152.139C55.9855 156.902 53.1474 167.164 48.8894 168.751Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Eunpyeonggu;
