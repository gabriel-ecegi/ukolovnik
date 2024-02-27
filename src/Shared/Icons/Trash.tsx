import * as React from "react";
export const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={20.057}
      viewBox="0 0 18 20.057"
      {...props}
    >
      <g transform="translate(-0.25 -0.25)">
        <path
          d="M17.479,5.75H1.021a.75.75,0,1,1,0-1.5H17.479a.75.75,0,1,1,0,1.5Z"
          transform="translate(0 0.124)"
          fill="currentColor"
        />
        <path
          d="M7,15.75A.75.75,0,0,1,6.25,15V9a.75.75,0,0,1,1.5,0v6A.75.75,0,0,1,7,15.75Z"
          transform="translate(0.188 0.371)"
          fill="currentColor"
        />
        <path
          d="M11,15.75a.75.75,0,0,1-.75-.75V9a.75.75,0,0,1,1.5,0v6A.75.75,0,0,1,11,15.75Z"
          transform="translate(0.313 0.371)"
          fill="currentColor"
        />
        <path
          d="M13.379,19.75H5.121a2.867,2.867,0,0,1-2.007-.805,2.69,2.69,0,0,1-.831-1.911L1.253,5.062a.758.758,0,0,1,.707-.81.767.767,0,0,1,.836.685l1.032,12q0,.031,0,.062a1.223,1.223,0,0,0,.378.884,1.3,1.3,0,0,0,.912.366h8.258a1.3,1.3,0,0,0,.912-.366A1.222,1.222,0,0,0,14.669,17q0-.031,0-.062l1.032-12a.767.767,0,0,1,.836-.685.758.758,0,0,1,.707.81l-1.03,11.971a2.69,2.69,0,0,1-.831,1.911A2.867,2.867,0,0,1,13.379,19.75Z"
          transform="translate(0 0.557)"
          fill="currentColor"
        />
        <path
          d="M12,5.75A.75.75,0,0,1,11.25,5V2a.249.249,0,0,0-.073-.177A.252.252,0,0,0,11,1.75H7A.25.25,0,0,0,6.75,2V5a.75.75,0,0,1-1.5,0V2A1.75,1.75,0,0,1,7,.25h4A1.75,1.75,0,0,1,12.75,2V5A.75.75,0,0,1,12,5.75Z"
          transform="translate(0.25)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
