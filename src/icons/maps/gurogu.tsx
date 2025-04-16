const Gurogu = ({
  width = 217,
  height = 120,
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
      viewBox="0 0 217 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M98.0257 6.8107C111.742 4.67344 111.742 19.1004 124.985 22.8406C138.228 26.5808 145.806 25.0684 158.093 21.2377C169.081 17.8115 176.065 13.7574 183.16 5.74258C190.254 -2.27223 195.807 2.8028 202.079 7.80683C208.048 12.5692 211.538 26.0461 211.538 26.0461C216.398 38.9033 217.526 49.6102 211.538 61.8453C202.649 80.0076 178.903 76.8061 168.498 73.6003C158.092 70.3946 152.499 67.8312 142.958 67.7229C130.108 67.577 123.566 70.3944 110.796 77.8748C98.0257 85.3552 79.5949 103.696 70.1207 108.331C60.6464 112.965 58.2965 117.103 37.486 118.483C16.6754 119.862 2.95929 106.728 1.54048 93.3699C0.121666 80.0121 2.0134 78.9435 14.7835 34.0611C16.726 27.2343 17.8363 18.7766 19.0403 16.9631C20.4592 14.8258 23.7881 14.0183 28.4995 15.3601C36.9192 17.7581 41.205 26.0461 48.8371 26.0461C67.7475 26.0461 84.3097 8.94795 98.0257 6.8107Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gurogu;
