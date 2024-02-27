import * as React from "react";
export const CrownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={13.846}
      viewBox="0 0 20 13.846"
      {...props}
    >
      <path
        d="M12.25,5.25a.769.769,0,0,1,.64.343l3.637,5.456L21,7.47a.769.769,0,0,1,1.235.752L20.184,18.478a.769.769,0,0,1-.754.618H5.071a.769.769,0,0,1-.754-.618L2.265,8.221A.769.769,0,0,1,3.5,7.47l4.473,3.578L11.61,5.593A.769.769,0,0,1,12.25,5.25Zm4.1,7.692a.769.769,0,0,1-.64-.343L12.25,7.406,8.787,12.6a.769.769,0,0,1-1.121.174L4.188,9.99,5.7,17.558H18.8L20.312,9.99l-3.479,2.783A.769.769,0,0,1,16.353,12.942Z"
        transform="translate(-2.25 -5.25)"
        fill="currentColor"
      />
    </svg>
  );
};
