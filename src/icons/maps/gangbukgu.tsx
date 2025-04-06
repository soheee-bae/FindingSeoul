const Gangbukgu = ({
  width = 148,
  height = 126,
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
      viewBox="0 0 148 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.5783 36.0935C46.9139 26.7817 54.8401 13.9156 51.7092 0C51.7092 0 48.0068 8.58071 43.0995 12.611C34.0982 20.0036 23.0707 20.0089 14.9212 30.8752C-0.733364 51.7486 5.91967 64.7944 0.0492548 77.8403C-1.71188 81.754 44.2732 94.365 53.666 99.1485C61.9523 103.369 63.5269 117.735 71.2773 123.066C79.4959 128.719 116.939 125.291 129.2 120.457C141.332 115.673 148.376 105.671 147.984 103.497C147.593 101.323 139.766 97.8439 135.069 89.1467C131.605 82.7312 125.001 77.5027 118.241 73.0568C94.7586 57.6145 88.1596 60.2319 80.67 58.2715C67.7736 54.8959 50.1551 44.9152 48.5783 36.0935Z"
        fill={fillColor}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default Gangbukgu;
