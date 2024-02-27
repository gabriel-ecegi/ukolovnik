import * as React from "react";
export const EditIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      viewBox="0 0 19 19"
      {...props}
    >
      <path
        d="M-965.194-402.621a2.787,2.787,0,0,1-1.984-.822,2.79,2.79,0,0,1-.822-1.984v-9.183a2.789,2.789,0,0,1,.822-1.984,2.788,2.788,0,0,1,1.984-.822h3.061a.766.766,0,0,1,.765.766.765.765,0,0,1-.765.765h-3.061a1.268,1.268,0,0,0-.9.374,1.264,1.264,0,0,0-.374.9v9.183a1.264,1.264,0,0,0,.374.9,1.268,1.268,0,0,0,.9.374h9.183a1.268,1.268,0,0,0,.9-.374,1.267,1.267,0,0,0,.374-.9v-3.061a.765.765,0,0,1,.765-.766.765.765,0,0,1,.765.766v3.061a2.79,2.79,0,0,1-.822,1.984,2.787,2.787,0,0,1-1.983.822Zm3.061-5.1a.765.765,0,0,1-.765-.765v-3.062a.762.762,0,0,1,.224-.541l8.672-8.672a2.91,2.91,0,0,1,2.072-.859,2.909,2.909,0,0,1,2.072.859,2.907,2.907,0,0,1,.859,2.072,2.907,2.907,0,0,1-.859,2.071l-8.672,8.673a.769.769,0,0,1-.542.224Zm.765-3.509v1.978h1.979l6.377-6.377-1.979-1.979Zm9.438-5.48.99-.99a1.392,1.392,0,0,0,.41-.989,1.394,1.394,0,0,0-.41-.99,1.391,1.391,0,0,0-.99-.41,1.389,1.389,0,0,0-.989.41l-.99.99Z"
        transform="translate(968 421.622)"
        fill="currentColor"
      />
    </svg>
  );
};
