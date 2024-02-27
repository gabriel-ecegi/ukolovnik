import * as React from "react";
export const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={13.936}
      viewBox="0 0 16 13.936"
      {...props}
    >
      <path
        d="M-878.782-499.75a.772.772,0,0,1,.547.227.772.772,0,0,1,.227.547.772.772,0,0,1-.227.547l-4.871,4.871h12.582a.774.774,0,0,1,.774.774.774.774,0,0,1-.774.774h-12.583l4.872,4.872a.772.772,0,0,1,.227.547.771.771,0,0,1-.227.547.774.774,0,0,1-1.095,0l-6.193-6.194,0,0,0,0,0,0h0a.773.773,0,0,1-.13-.178v-.015q-.013-.027-.025-.054a.772.772,0,0,1-.058-.281.013.013,0,0,0,0,0,.009.009,0,0,0,0,0s0-.007,0-.01,0-.007,0-.01v0s0,0,0,0,0,0,0,0h0a.771.771,0,0,1,.057-.277.772.772,0,0,1,.164-.249l0,0h0l0,0h0l6.193-6.193A.772.772,0,0,1-878.782-499.75Z"
        transform="translate(885.75 499.75)"
        fill="currentColor"
      />
    </svg>
  );
};