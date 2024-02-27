import * as React from "react";
export const FlagIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 5V21"
        stroke="#FACC15"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 5V14"
        stroke="#FACC15"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 4.99999C5.93464 4.08386 7.19124 3.57071 8.5 3.57071C9.80876 3.57071 11.0654 4.08386 12 4.99999C12.9346 5.91613 14.1912 6.42928 15.5 6.42928C16.8088 6.42928 18.0654 5.91613 19 4.99999"
        stroke="#FACC15"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14C5.93464 13.0839 7.19124 12.5707 8.5 12.5707C9.80876 12.5707 11.0654 13.0839 12 14C12.9346 14.9161 14.1912 15.4293 15.5 15.4293C16.8088 15.4293 18.0654 14.9161 19 14"
        stroke="#FACC15"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
