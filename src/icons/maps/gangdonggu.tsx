const Gangdonggu = ({
  width = 172,
  height = 160,
  fillColor = "#F2EDEA",
  strokeColor = "none",
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
      viewBox="0 0 172 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9822 92.8219C12.8326 87.6475 9.5664 82.631 0.117612 81.3115C-1.05413 81.1479 6.77409 71.2704 12.8324 56.7562C16.1634 48.776 17.3602 47.0799 18.7377 37.8436C18.8033 37.4039 27.3992 37.8436 50.2327 29.0471C75.8474 19.1791 100.193 -0.691491 113.223 0.0185317C129.758 0.919574 147.551 23.7761 159.284 47.0798C170.55 69.4553 174.638 94.581 170.307 109.095C165.105 126.53 141.225 123.948 120.703 127.568C113.223 128.887 109.68 132.406 106.924 135.485C100.082 143.129 99.4437 156.596 99.4437 158.796C99.4437 160.115 95.3977 160.981 88.8141 157.916C79.3656 153.518 79.2841 140.323 71.4919 134.166C55.351 121.411 30.1547 131.527 21.4935 120.531C14.3 111.398 22.6748 103.817 15.9822 92.8219Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Gangdonggu;
