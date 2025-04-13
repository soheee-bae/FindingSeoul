const Gwangjingu = ({
  width = 184,
  height = 117,
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
      viewBox="0 0 184 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M116.995 105.338C153.719 92.0081 187.618 11.4944 182.439 13.094C177.26 14.6936 157.63 14.1193 149.011 8.29517C145.756 6.09571 141.948 1.36353 141.948 1.36353C141.948 1.36353 68.2653 5.09595 61.9092 8.29517C55.5532 11.4944 42.5489 45.0862 34.0741 54.6839C25.5994 64.2815 18.5651 63.9592 10.0623 80.8108C6.29582 88.2757 -1.18045 106.405 1.64434 110.137C4.46913 113.869 67.5588 123.283 116.995 105.338Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gwangjingu;
