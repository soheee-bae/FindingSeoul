const Mapogu = ({
  width = 178,
  height = 52,
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
      viewBox="0 0 178 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M140.094 5.80425C155.187 3.4221 176.373 1.47247 176.373 1.47247C176.373 0.930922 172.788 16.727 166.826 24.7586C159.188 35.048 142.958 44.2543 140.094 48.5865C137.79 52.0704 135.532 49.1501 131.978 47.5034C121.618 42.7026 114.194 46.7919 103.337 43.7126C88.0612 39.3802 82.3329 32.8816 67.0574 32.3401C59.4178 32.0692 44.5709 35.5953 35.0742 36.6725C23.1894 38.0205 7.37961 37.214 7.37961 35.0478C7.37961 26.3831 1.65894 26.4847 1.65894 24.2519C1.65894 22.0191 7.86462 17.7533 14.5477 18.2949C21.2307 18.8364 27.8088 17.2252 36.5066 13.9274C46.8841 9.9927 53.2548 7.18823 64.1934 6.88734C77.1616 6.53063 83.683 11.0314 96.6539 11.2197C113.789 11.4686 123.121 8.48307 140.094 5.80425Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Mapogu;
