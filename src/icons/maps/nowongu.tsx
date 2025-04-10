const Nowongu = ({
  width = 156,
  height = 205,
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
      viewBox="0 0 156 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M94.4506 187.4C90.6361 189.609 85.0322 192.221 77.4975 202.251C69.9629 212.28 -7.73785 163.002 2.1514 156.107C12.0406 149.212 15.3369 146.03 23.8133 133.831C29.5552 125.567 31.4242 116.395 32.2897 103.068C33.7021 81.3224 22.7099 80.9354 23.3424 67.002C24.0061 52.3807 34.1734 49.4992 34.6447 35.7092C34.7932 31.3627 34.6447 30.9358 35.5863 27.223C36.528 23.5103 61.5048 0.879337 81.7359 1.23412C104.252 1.62899 120.351 16.6154 133.066 36.7701C145.944 57.1845 150.489 97.1908 151.431 105.19C152.113 110.981 156.14 165.167 153.315 165.654C150.489 166.141 110.933 177.853 94.4506 187.4Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Nowongu;
