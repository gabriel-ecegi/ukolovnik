import * as React from "react";
export const CheckboxIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <g fill="none">
        <path
          d="M4,0H14a4,4,0,0,1,4,4V14a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
          stroke="none"
        />
        <path
          d="M 4 1 C 2.345789909362793 1 1 2.345789909362793 1 4 L 1 14 C 1 15.65421009063721 2.345789909362793 17 4 17 L 14 17 C 15.65421009063721 17 17 15.65421009063721 17 14 L 17 4 C 17 2.345789909362793 15.65421009063721 1 14 1 L 4 1 M 4 0 L 14 0 C 16.20914077758789 0 18 1.790859222412109 18 4 L 18 14 C 18 16.20914077758789 16.20914077758789 18 14 18 L 4 18 C 1.790859222412109 18 0 16.20914077758789 0 14 L 0 4 C 0 1.790859222412109 1.790859222412109 0 4 0 Z"
          stroke="none"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
