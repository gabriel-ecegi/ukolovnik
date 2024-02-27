import * as React from "react";
export const ExpandArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={5.789}
      viewBox="0 0 10 5.789"
      {...props}
    >
      <path
        d="M8.25,11.039a.787.787,0,0,1-.558-.231L3.481,6.6A.789.789,0,0,1,4.6,5.481L8.25,9.134,11.9,5.481A.789.789,0,1,1,13.019,6.6L8.808,10.808A.787.787,0,0,1,8.25,11.039Z"
        transform="translate(-3.25 -5.25)"
        fill="currentColor"
      />
    </svg>
  );
};
