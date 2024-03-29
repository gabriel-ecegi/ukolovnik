import * as React from "react";
export const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={16}
      viewBox="0 0 18 16"
      {...props}
    >
      <g transform="translate(-970 -454)">
        <path
          d="M-958.726-439.7a3.109,3.109,0,0,1,3.113-3.1,3.109,3.109,0,0,1,3.113,3.1,3.108,3.108,0,0,1-3.113,3.1A3.108,3.108,0,0,1-958.726-439.7Zm1.5,0a1.607,1.607,0,0,0,1.614,1.6A1.606,1.606,0,0,0-954-439.7a1.607,1.607,0,0,0-1.613-1.6A1.608,1.608,0,0,0-957.227-439.7Zm-11.994.788a.75.75,0,0,1-.75-.75.75.75,0,0,1,.75-.75h6.3a.75.75,0,0,1,.75.75.75.75,0,0,1-.75.75ZM-970-449.4a3.109,3.109,0,0,1,3.113-3.1,3.108,3.108,0,0,1,3.113,3.1,3.108,3.108,0,0,1-3.113,3.1A3.109,3.109,0,0,1-970-449.4Zm1.5,0a1.606,1.606,0,0,0,1.613,1.6,1.606,1.606,0,0,0,1.614-1.6,1.607,1.607,0,0,0-1.614-1.6A1.607,1.607,0,0,0-968.5-449.4Zm8.391.8a.75.75,0,0,1-.751-.75.75.75,0,0,1,.751-.751h6.3a.75.75,0,0,1,.751.751.75.75,0,0,1-.751.75Z"
          transform="translate(1940.25 906.55)"
          fill="currentColor"
        />
        <rect
          width={18}
          height={16}
          transform="translate(970 454)"
          fill="none"
        />
      </g>
    </svg>
  );
};
