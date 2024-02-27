import * as React from "react";
export const ContractIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={20.129}
      viewBox="0 0 16 20.129"
      {...props}
    >
      <g transform="translate(-0.25 -0.25)">
        <path
          d="M15,6.75H11A1.75,1.75,0,0,1,9.25,5V1a.75.75,0,0,1,1.5,0V5a.249.249,0,0,0,.073.177A.252.252,0,0,0,11,5.25h4a.75.75,0,0,1,0,1.5Z"
          transform="translate(0.5)"
          fill="currentColor"
        />
        <path
          d="M13.411,20.379H3.089A2.839,2.839,0,0,1,.25,17.54V3.089A2.839,2.839,0,0,1,3.089.25h7.226a.774.774,0,0,1,.547.227l5.161,5.161a.774.774,0,0,1,.227.547V17.54a2.839,2.839,0,0,1-2.839,2.839ZM3.089,1.8A1.29,1.29,0,0,0,1.8,3.089V17.54a1.29,1.29,0,0,0,1.29,1.29H13.411a1.29,1.29,0,0,0,1.29-1.29V6.506L9.994,1.8Z"
          fill="currentColor"
        />
        <path
          d="M6,7.75H5a.75.75,0,0,1,0-1.5H6a.75.75,0,0,1,0,1.5Z"
          transform="translate(0.154 0.21)"
          fill="currentColor"
        />
        <path
          d="M11,11.75H5a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z"
          transform="translate(0.25 0.349)"
          fill="currentColor"
        />
        <path
          d="M11,15.75H5a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z"
          transform="translate(0.25 0.489)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
