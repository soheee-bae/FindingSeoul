const Geumcheongu = ({
  width = 145,
  height = 135,
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
      viewBox="0 0 145 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.5591 18.4825C18.8926 25.4471 7.16635 24.5915 2.48789 23.2307C-1.1396 22.1755 2.71545 24.6041 7.63439 31.3661C15.6937 42.445 28.2087 67.5645 38.5125 88.1214C44.5946 100.256 49.741 105.531 54.4195 111.862C64.6725 125.736 76.8198 134.464 92.7832 133.005C110.094 131.422 113.909 117.136 129.743 108.209C134.422 105.572 133.018 107.114 138.633 103.949C142.834 101.58 144.715 97.6175 141.908 95.5072C138.698 93.094 136.761 98.0367 128.808 95.5072C110.562 89.7041 100.285 73.3586 92.7832 52.2468C88.5041 40.2043 92.6022 31.9514 86.7012 20.8147C82.3934 12.6848 72.1978 2.65518 67.9872 3.71055C54.672 7.04789 48.8346 0.668826 45.5303 1.60035C41.7875 2.6555 38.5125 13.7344 30.5591 18.4825Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Geumcheongu;
