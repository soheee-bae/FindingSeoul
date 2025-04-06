const Mapogu = ({
  width = 256,
  height = 112,
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
      viewBox="0 0 256 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M203.969 55.2515C221.147 57.2432 235.229 56.1366 245.412 56.1366C250.142 56.1366 256.706 62.469 255.938 70.7407C255.538 75.0479 251.249 80.9193 249.686 82.6895C247.342 85.3448 236.561 93.856 226.241 97.2936C212.956 101.719 210.611 100.834 209.83 106.145C209.604 107.679 208.658 112.783 207.095 111.898C205.532 111.013 190.761 104.887 184.822 103.489C154.734 96.4085 136.076 98.8366 107.063 87.5575C90.2527 81.0225 81.1828 73.4289 65.6434 63.6599C54.6526 56.7505 47.2558 54.7042 35.5558 49.4984C24.6149 44.6304 -7.39176 26.526 1.56061 28.6986C12.5016 31.3539 24.224 27.8135 40.6354 19.4051C53.0905 13.0237 63.6897 5.24357 67.5972 3.47331C71.6046 1.6578 83.4734 -1.89883 86.7439 1.26063C100.029 14.0946 128.36 29.7637 160.986 43.7452C175.444 49.9409 188.653 53.4756 203.969 55.2515Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Mapogu;
