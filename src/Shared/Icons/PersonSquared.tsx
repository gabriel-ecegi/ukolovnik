import * as React from "react";
export const PersonSquaredIcon = (props: React.SVGProps<SVGSVGElement>) => {
  props = {
    ...props,
    color: props.color,
  };
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      {...props}
    >
      <path
        d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 17 L 6 17 L 6 6 L 16 6 L 16 4 L 5 4 z M 34 4 L 34 6 L 44 6 L 44 17 L 46 17 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 34 4 z M 25.949219 12 C 22.899482 12 20.614789 13.225517 19.410156 15.066406 C 18.328033 16.72008 18.260294 18.784268 18.90625 20.716797 C 18.617944 21.133774 18.411921 21.648272 18.494141 22.34375 C 18.587481 23.135342 18.800017 23.732418 19.146484 24.181641 C 19.285643 24.362071 19.492731 24.365034 19.667969 24.482422 C 19.790639 25.103375 19.950767 25.723881 20.203125 26.236328 C 20.361318 26.557561 20.531038 26.845772 20.714844 27.097656 C 20.761304 27.161326 20.849997 27.209515 20.896484 27.269531 C 20.901184 27.913826 20.905982 28.485602 20.857422 29.150391 C 20.704265 29.513758 20.386399 29.831394 19.751953 30.175781 C 19.087267 30.536583 18.175692 30.877793 17.228516 31.324219 C 16.28134 31.770644 15.28293 32.333225 14.474609 33.230469 C 13.666289 34.127712 13.094821 35.368936 13.001953 36.941406 A 1.0001 1.0001 0 0 0 14 38 L 36 38 A 1.0001 1.0001 0 0 0 36.998047 36.941406 C 36.904377 35.355348 36.291857 34.101058 35.435547 33.207031 C 34.579237 32.313005 33.525252 31.758579 32.523438 31.314453 C 31.521622 30.870327 30.554994 30.529532 29.847656 30.166016 C 29.171273 29.818407 28.836671 29.494052 28.689453 29.148438 C 28.640933 28.483245 28.647624 27.911068 28.652344 27.265625 C 28.698424 27.204915 28.788208 27.155923 28.833984 27.091797 C 29.014832 26.838453 29.178403 26.547628 29.332031 26.226562 C 29.576991 25.714627 29.73196 25.098188 29.851562 24.482422 C 30.025834 24.365165 30.232641 24.363197 30.371094 24.183594 C 30.717339 23.73444 30.928131 23.134893 31.021484 22.34375 C 31.081194 21.838701 31.028584 21.375093 30.855469 20.96875 C 30.817989 20.88079 30.686963 20.846246 30.636719 20.761719 C 30.80012 20.338992 31.025177 19.951716 31.074219 19.451172 C 31.154109 18.635802 31.102639 17.7276 30.869141 16.833984 C 30.635643 15.940368 30.216462 15.049971 29.5 14.353516 C 28.931235 13.800633 28.125665 13.472413 27.230469 13.330078 L 26.845703 12.554688 A 1.0001 1.0001 0 0 0 25.949219 12 z M 25.386719 14.113281 L 25.650391 14.644531 A 1.0001 1.0001 0 0 0 26.546875 15.199219 C 27.285059 15.199219 27.729681 15.421815 28.105469 15.787109 C 28.481257 16.152404 28.768093 16.70646 28.933594 17.339844 C 29.099095 17.973228 29.140848 18.675479 29.083984 19.255859 C 29.027124 19.83624 28.826455 20.301532 28.777344 20.365234 A 1.0001 1.0001 0 0 0 29.019531 21.808594 C 29.032371 21.851794 29.056546 21.928369 29.035156 22.109375 C 28.970956 22.65342 28.838193 22.890441 28.789062 22.955078 A 1.0001 1.0001 0 0 0 27.996094 23.828125 C 27.947364 24.289214 27.75329 24.895162 27.529297 25.363281 C 27.4173 25.597341 27.296762 25.80125 27.205078 25.929688 C 27.113398 26.058124 27.002393 26.103152 27.173828 26.011719 A 1.0001 1.0001 0 0 0 26.644531 26.894531 C 26.644531 27.761868 26.608532 28.493893 26.701172 29.533203 A 1.0001 1.0001 0 0 0 26.759766 29.789062 C 27.148699 30.851926 28.037213 31.484643 28.933594 31.945312 C 29.829975 32.405983 30.810331 32.742454 31.712891 33.142578 C 32.615451 33.542702 33.422576 33.999136 33.990234 34.591797 C 34.350573 34.968006 34.593515 35.442751 34.769531 36 L 15.220703 36 C 15.389518 35.430236 15.621512 34.945123 15.960938 34.568359 C 16.491991 33.978884 17.237707 33.530763 18.082031 33.132812 C 18.926355 32.734864 19.852842 32.397261 20.707031 31.933594 C 21.56122 31.469927 22.408514 30.82842 22.789062 29.787109 A 1.0001 1.0001 0 0 0 22.845703 29.533203 C 22.938343 28.493893 22.904297 27.761868 22.904297 26.894531 A 1.0001 1.0001 0 0 0 22.373047 26.011719 C 22.539928 26.100519 22.426821 26.049822 22.332031 25.919922 C 22.237241 25.790025 22.113229 25.587408 21.998047 25.353516 C 21.767684 24.885732 21.568955 24.280724 21.521484 23.828125 A 1.0001 1.0001 0 0 0 20.728516 22.955078 C 20.679606 22.890758 20.544682 22.653969 20.480469 22.109375 C 20.458734 21.925539 20.504219 21.824777 20.53125 21.785156 A 1.0001 1.0001 0 0 0 20.861328 20.570312 C 20.173408 19.012075 20.278867 17.390517 21.083984 16.160156 C 21.815579 15.042151 23.248365 14.262902 25.386719 14.113281 z M 4 35 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 16 46 L 16 44 L 6 44 L 6 35 L 4 35 z M 44 35 L 44 44 L 34 44 L 34 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 35 L 44 35 z"
        fill="currentColor"
      />
    </svg>
  );
};