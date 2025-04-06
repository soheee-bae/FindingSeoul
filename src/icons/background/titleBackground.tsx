const TitleBackgrounds = ({
  width = 149,
  height = 94,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 149 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.329 63.862C113.684 57.6509 148.855 54.3145 148.959 33.9563C149.119 2.65203 90.0702 1.42651 66.7944 0.0981607C45.1372 -1.13781 9.80123 12.7142 2.44411 30.3117C-4.91301 47.9092 5.16746 76.1553 23.9804 87.0211C62.7214 109.397 77.229 71.4953 97.329 63.862Z"
        fill="#F4F6F8"
      />
    </svg>
  );
};

export default TitleBackgrounds;
