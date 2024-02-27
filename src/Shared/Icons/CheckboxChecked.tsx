import * as React from "react";
export const CheckboxCheckedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        d="M4.76,1.76a3.006,3.006,0,0,0-3,3v12a3.006,3.006,0,0,0,3,3h12a3.006,3.006,0,0,0,3-3v-12a3.006,3.006,0,0,0-3-3Zm0,.857h12A2.136,2.136,0,0,1,18.9,4.76v12A2.136,2.136,0,0,1,16.76,18.9h-12A2.136,2.136,0,0,1,2.617,16.76v-12A2.136,2.136,0,0,1,4.76,2.617ZM15.574,6.831,9.866,13.569,6.38,10.318l-.584.628L9.938,14.81l6.293-7.425Z"
        transform="translate(-1.76 -1.76)"
        fill="currentColor"
      />
    </svg>
  );
};
