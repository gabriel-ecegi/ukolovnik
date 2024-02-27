import * as React from "react";
export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={8.522}
      viewBox="0 0 12 8.522"
      {...props}
    >
      <path
        d="M6.844,12.438a.783.783,0,0,1-.553-.229L2.813,8.731A.783.783,0,1,1,3.919,7.624l2.925,2.925,6.4-6.4a.783.783,0,1,1,1.107,1.107L7.4,12.209A.783.783,0,0,1,6.844,12.438Z"
        transform="translate(-2.583 -3.917)"
        fill="currentColor"
      />
    </svg>
  );
};
