const Gangnamgu = ({
  width = 291,
  height = 150,
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
      viewBox="0 0 291 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.9055 58.3915C30.163 49.6901 17.0723 26.8189 1.24907 15.0062C-1.58581 12.8898 29.797 2.20831 50.3874 1.77881C73.761 1.29125 100.897 12.5339 111.81 16.0643C133.072 22.9427 161.894 21.3554 160.949 23.4717C159.206 27.3741 157.124 48.1434 163.311 58.9207C167.564 66.328 173.687 71.868 188.353 77.4389C207.767 84.8136 234.456 75.9753 253.556 84.3171C263.95 88.8568 290.409 120.295 288.992 125.586C287.574 130.877 256.863 145.691 240.326 147.808C226.304 149.602 219.433 140.775 205.362 141.988C199.22 142.517 196.857 147.278 194.022 138.813C191.188 130.348 179.008 130.392 173.233 130.877C154.334 132.464 127.875 147.807 112.283 139.871C101.985 134.63 102.361 118.708 88.1861 108.126C80.1539 102.129 72.7846 99.1315 65.6974 98.6025C54.4911 97.7659 45.7666 98.1233 39.9927 86.9623C35.2938 77.8792 35.7404 67.386 32.9055 58.3915Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gangnamgu;
