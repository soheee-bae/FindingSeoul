const MapPin = ({
  width = 32,
  height = 56,
  className = "",
  fill = "#5A6773",
}: {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.04004 53.4098C9.52986 54.5731 10.1115 53.9916 15.9279 53.4099C21.7442 52.8281 20.9133 53.7977 24.0708 54.5732"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        cx="15.9278"
        cy="16.5892"
        r="14.7042"
        fill={fill}
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M13.0195 31.1301L13.0195 52.7725H17.6726V42.4888L17.6726 31.1301H13.0195Z"
        stroke="black"
        strokeWidth="2"
      />
      <circle cx="10.9686" cy="7.49719" r="0.826537" fill="black" />
      <circle cx="7.66223" cy="9.97668" r="0.826537" fill="black" />
      <circle cx="6.0094" cy="14.1095" r="0.826537" fill="black" />
    </svg>
  );
};

export default MapPin;
