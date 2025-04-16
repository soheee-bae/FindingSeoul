const Yeongdeungpogu = ({
  width = 146,
  height = 148,
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
      viewBox="0 0 146 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M110.204 39.7623C37.7073 31.8038 11.1723 -4.27274 5.9601 2.09366C1.07709 8.05797 14.0153 10.5824 18.2798 18.01C22.5444 25.4376 23.8807 37.3004 20.649 44.5372C16.3845 54.087 6.4341 54.087 2.64326 61.5147C-0.875615 68.4094 1.72258 82.2795 8.80313 82.7364C15.8837 83.1934 21.3547 86.4861 27.2827 92.2862C35.0107 99.8476 36.2856 108.203 39.6025 118.813C42.6202 128.467 42.324 135.266 42.4455 136.852C43.3521 148.687 56.9623 146.99 65.6223 144.973C70.8756 143.749 70.8756 143.219 76.0878 138.974C88.3493 128.989 110.237 134.279 118.259 119.875C122.106 112.966 120.69 108.055 123.945 100.775C129.573 88.1872 146.216 85.3891 144.32 77.431C142.757 70.8664 135.082 75.0647 122.05 59.3925C109.256 44.0067 114.942 40.2825 110.204 39.7623Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Yeongdeungpogu;
