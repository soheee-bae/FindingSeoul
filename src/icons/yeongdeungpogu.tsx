const Yeongdeungpogu = ({
  width = 119,
  height = 119,
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
      viewBox="0 0 119 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M90.5619 31.5146C30.3949 24.9861 8.37277 -4.60788 4.04703 0.614556C-0.0055156 5.50716 10.7323 7.57796 14.2715 13.6709C17.8108 19.7639 18.9198 29.4951 16.2378 35.4315C12.6985 43.2654 4.44041 43.2654 1.29429 49.3583C-1.62612 55.0142 0.53019 66.392 6.40653 66.7668C12.2829 67.1417 16.8235 69.8427 21.7433 74.6006C28.157 80.8033 29.215 87.657 31.9678 96.3613C34.4722 104.28 34.2264 109.858 34.3273 111.158C35.0796 120.867 46.3752 119.475 53.5624 117.82C57.9222 116.816 57.9222 116.381 62.248 112.899C72.4241 104.709 90.5896 109.048 97.2472 97.2317C100.44 91.5647 99.2649 87.536 101.966 81.564C106.637 71.2382 120.449 68.9429 118.876 62.4147C117.578 57.0297 111.209 60.4736 100.393 47.6175C89.7754 34.9963 94.4944 31.9413 90.5619 31.5146Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Yeongdeungpogu;
