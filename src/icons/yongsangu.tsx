const Yongsangu = ({
  width = 167,
  height = 78,
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
      viewBox="0 0 167 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M161.12 26.5678C163.992 31.0141 167 41.7385 167 43.9057C167 45.6395 156.416 49.9739 143.872 57.3425C125.969 67.8589 110.253 72.8943 95.2632 75.9807C38.4231 87.6837 -0.558322 44.7726 0.00604864 43.0388C4.38001 29.6017 8.63157 42.1719 34.5038 21.7999C40.536 17.0502 44.4676 11.9722 46.264 4.02854C47.0481 0.561055 56.8481 4.89558 76.4483 2.72824C84.876 1.79632 87.6025 -0.573007 96.0485 0.127647C106.959 1.03275 110.945 4.46211 121.137 7.92968C132.126 11.6685 140.816 7.30687 150.928 14.0156C154.848 16.6163 159.16 23.5338 161.12 26.5678Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Yongsangu;
