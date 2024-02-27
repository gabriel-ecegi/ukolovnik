import * as React from "react";
export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      viewBox="0 0 17 17"
      {...props}
    >
      <path
        d="M9.836,1.667a8.081,8.081,0,0,0-8.17,7.989,8.081,8.081,0,0,0,8.17,7.989,8.251,8.251,0,0,0,5.1-1.748l2.655,2.59.071.059a.64.64,0,0,0,.819-.061.606.606,0,0,0,0-.87l-2.624-2.56a7.865,7.865,0,0,0,2.149-5.4A8.081,8.081,0,0,0,9.836,1.667Zm0,1.231a6.836,6.836,0,0,1,6.911,6.759,6.836,6.836,0,0,1-6.911,6.759A6.836,6.836,0,0,1,2.925,9.656,6.836,6.836,0,0,1,9.836,2.9Z"
        transform="translate(-1.667 -1.667)"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};
