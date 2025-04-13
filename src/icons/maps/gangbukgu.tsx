const Gangbukgu = ({
  width = 181,
  height = 157,
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
      viewBox="0 0 181 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.7171 45.4297C57.7116 34.0781 67.2622 18.3937 63.4897 1.42993C63.4897 1.42993 59.0286 11.8902 53.1156 16.8033C42.2697 25.8153 28.9824 25.8218 19.1629 39.0683C0.300312 64.5139 8.31672 80.4175 1.24331 96.321C-0.87872 101.092 54.5298 116.465 65.8474 122.297C75.8318 127.441 77.729 144.954 87.0677 151.453C96.9705 158.345 142.087 154.165 156.86 148.272C171.478 142.441 179.966 130.248 179.494 127.598C179.022 124.947 169.591 120.706 163.932 110.104C159.758 102.283 151.801 95.9094 143.655 90.4897C115.361 71.6647 107.41 74.8555 98.3852 72.4657C82.846 68.3507 61.6171 56.1837 59.7171 45.4297Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Gangbukgu;
