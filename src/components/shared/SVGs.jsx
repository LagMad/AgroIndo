import React from "react";



const Location = ({ fillColor="white", width="24", height="30" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3401 11.8169C16.3401 14.3334 14.3 16.3735 11.7834 16.3735C9.2668 16.3735 7.2267 14.3334 7.2267 11.8169C7.2267 9.30027 9.2668 7.26017 11.7834 7.26017C14.3 7.26017 16.3401 9.30027 16.3401 11.8169Z"
        stroke={fillColor}
        strokeWidth="1.82267"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4157 11.4371C22.4157 19.9809 11.7834 28.5247 11.7834 28.5247C11.7834 28.5247 1.15112 19.9809 1.15112 11.4371C1.15112 5.77481 5.91135 1.18459 11.7834 1.18459C17.6554 1.18459 22.4157 5.77481 22.4157 11.4371Z"
        stroke={fillColor}
        strokeWidth="1.82267"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Email = ({ fillColor = "white", width = "29", height = "23" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.73352 3.88842L11.8368 10.7158C13.4029 11.8905 15.5564 11.8905 17.1225 10.7158L26.2258 3.88835M4.20179 21.5076H24.7575C26.3793 21.5076 27.694 20.1929 27.694 18.5711V3.88842C27.694 2.26662 26.3793 0.951889 24.7575 0.951889H4.20179C2.57999 0.951889 1.26526 2.26662 1.26526 3.88842V18.5711C1.26526 20.1929 2.57999 21.5076 4.20179 21.5076Z"
        stroke={fillColor}
        strokeWidth="1.82267"
        strokeLinecap="round"
      />
    </svg>
  );
};


const WhatsApp = ({ fillColor="#B1C381", width="50", height="49" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 47.4688C37.0812 47.4688 46.875 37.8709 46.875 26.0312C46.875 14.1916 37.0812 4.59375 25 4.59375C12.9188 4.59375 3.125 14.1916 3.125 26.0312C3.125 29.876 4.15781 33.4844 5.96637 36.6045L3.125 47.4688L14.5545 44.8714C17.6584 46.5277 21.2171 47.4688 25 47.4688ZM25 44.1707C35.2226 44.1707 43.5096 36.0494 43.5096 26.0312C43.5096 16.0131 35.2226 7.89183 25 7.89183C14.7774 7.89183 6.49038 16.0131 6.49038 26.0312C6.49038 29.8993 7.72578 33.4846 9.831 36.4288L8.17308 42.5216L14.4999 40.9716C17.4834 42.9892 21.1009 44.1707 25 44.1707Z"
        fill="#BFC8D0"
      />
      <path
        d="M43.75 24.5C43.75 34.6482 35.3553 42.875 25 42.875C21.0503 42.875 17.3858 41.6782 14.3635 39.6343L7.95455 41.2045L9.634 35.0326C7.50144 32.0501 6.25 28.4183 6.25 24.5C6.25 14.3518 14.6447 6.125 25 6.125C35.3553 6.125 43.75 14.3518 43.75 24.5Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 45.9375C37.0812 45.9375 46.875 36.3396 46.875 24.5C46.875 12.6604 37.0812 3.0625 25 3.0625C12.9188 3.0625 3.125 12.6604 3.125 24.5C3.125 28.3448 4.15781 31.9532 5.96637 35.0732L3.125 45.9375L14.5545 43.3402C17.6584 44.9964 21.2171 45.9375 25 45.9375ZM25 42.6394C35.2226 42.6394 43.5096 34.5181 43.5096 24.5C43.5096 14.4819 35.2226 6.36058 25 6.36058C14.7774 6.36058 6.49038 14.4819 6.49038 24.5C6.49038 28.368 7.72578 31.9533 9.831 34.8975L8.17308 40.9904L14.4999 39.4403C17.4834 41.4579 21.1009 42.6394 25 42.6394Z"
        fill="white"
      />
      <path
        d="M19.5313 14.5469C19.0112 13.5231 18.2133 13.6138 17.4073 13.6138C15.9668 13.6138 13.7207 15.3047 13.7207 18.4517C13.7207 21.0308 14.8804 23.854 18.7882 28.0774C22.5594 32.1532 27.5147 34.2616 31.6284 34.1898C35.7422 34.1181 36.5886 30.6488 36.5886 29.4772C36.5886 28.958 36.2598 28.6989 36.0332 28.6285C34.6314 27.9691 32.0458 26.7406 31.4575 26.5098C30.8692 26.279 30.5621 26.5912 30.3711 26.761C29.8376 27.2593 28.7801 28.7276 28.418 29.0579C28.0559 29.3882 27.5161 29.221 27.2914 29.0962C26.4647 28.7711 24.2233 27.794 22.4367 26.0967C20.2271 23.9976 20.0974 23.2754 19.6811 22.6325C19.3481 22.1182 19.5924 21.8027 19.7144 21.6648C20.1905 21.1265 20.8478 20.2954 21.1426 19.8823C21.4374 19.4693 21.2034 18.8422 21.063 18.4517C20.459 16.772 19.9474 15.3659 19.5313 14.5469Z"
        fill="white"
      />
    </svg>
  );
};

const Telegram = ({ fillColor="#B1C381", width="50", height="49" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="25"
        cy="24.5"
        rx="21.875"
        ry="21.4375"
        fill={fillColor}
      />
      <path
        d="M35.9165 15.6322C36.1113 14.3988 34.9147 13.4253 33.7957 13.9068L11.5075 23.4968C10.705 23.8421 10.7637 25.0333 11.596 25.293L16.1924 26.7275C17.0697 27.0012 18.0196 26.8597 18.7856 26.341L29.1484 19.3248C29.4609 19.1132 29.8015 19.5486 29.5345 19.8184L22.0752 27.3552C21.3516 28.0864 21.4952 29.3252 22.3656 29.8601L30.7171 34.9926C31.6538 35.5682 32.8589 34.9899 33.0341 33.8807L35.9165 15.6322Z"
        fill="white"
      />
    </svg>
  );
};

const StarDeco = ({ fillColor="#B1C381", width="192", height="192" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 191 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.201 64.0021L30.367 24.1464L81.2163 0.141005L100.09 39.978L125.186 3.77776L171.449 35.8162L146.389 72.041L190.319 75.6967L185.733 131.74L141.799 128.128L160.634 167.984L109.784 191.989L90.9104 152.153L65.8149 188.353L19.5513 156.314L44.6113 120.09L0.681346 116.434L5.26752 60.3902L49.201 64.0021Z"
        fill="#B1C381"
      />
    </svg>
  );
};

const Compass = ({ fillColor="#141C24", width="166", height="166" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 166 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M110.667 55.3333L69.1667 69.1667L55.3333 110.667L96.8333 96.8333L110.667 55.3333Z"
        stroke={fillcolor}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M145.25 83C145.25 117.38 117.38 145.25 83 145.25C48.6203 145.25 20.75 117.38 20.75 83C20.75 48.6203 48.6203 20.75 83 20.75C117.38 20.75 145.25 48.6203 145.25 83Z"
        stroke={fillcolor}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Instagram = ({ fillColor="black", width="87", height="84" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 87 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.8728 18.757C73.8728 22.2101 70.9858 25.0093 67.4246 25.0093C63.8634 25.0093 60.9765 22.2101 60.9765 18.757C60.9765 15.3039 63.8634 12.5047 67.4246 12.5047C70.9858 12.5047 73.8728 15.3039 73.8728 18.757Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.7815 62.5233C55.6522 62.5233 65.2753 53.1925 65.2753 41.6822C65.2753 30.172 55.6522 20.8411 43.7815 20.8411C31.9108 20.8411 22.2877 30.172 22.2877 41.6822C22.2877 53.1925 31.9108 62.5233 43.7815 62.5233ZM43.7815 54.1869C50.9039 54.1869 56.6778 48.5884 56.6778 41.6822C56.6778 34.7761 50.9039 29.1776 43.7815 29.1776C36.6591 29.1776 30.8852 34.7761 30.8852 41.6822C30.8852 48.5884 36.6591 54.1869 43.7815 54.1869Z"
        fill={fillColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.793945 40.0149C0.793945 26.0084 0.793945 19.0051 3.60516 13.6553C6.07798 8.94953 10.0237 5.12358 14.8769 2.72585C20.3942 0 27.6168 0 42.062 0H45.501C59.9462 0 67.1687 0 72.6861 2.72585C77.5392 5.12358 81.485 8.94953 83.9578 13.6553C86.769 19.0051 86.769 26.0084 86.769 40.0149V43.3495C86.769 57.3561 86.769 64.3593 83.9578 69.7091C81.485 74.4149 77.5392 78.2409 72.6861 80.6386C67.1687 83.3644 59.9462 83.3644 45.501 83.3644H42.062C27.6168 83.3644 20.3942 83.3644 14.8769 80.6386C10.0237 78.2409 6.07798 74.4149 3.60516 69.7091C0.793945 64.3593 0.793945 57.3561 0.793945 43.3495V40.0149ZM42.062 8.33644H45.501C52.8654 8.33644 57.8717 8.34293 61.7414 8.64949C65.5106 8.9481 67.4382 9.48935 68.7829 10.1537C72.0183 11.7522 74.6488 14.3028 76.2974 17.44C76.9825 18.7438 77.5407 20.6129 77.8487 24.2677C78.1648 28.0199 78.1715 32.8741 78.1715 40.0149V43.3495C78.1715 50.4903 78.1648 55.3446 77.8487 59.0967C77.5407 62.7516 76.9825 64.6206 76.2974 65.9244C74.6488 69.0617 72.0183 71.6123 68.7829 73.2108C67.4382 73.8751 65.5106 74.4163 61.7414 74.715C57.8717 75.0215 52.8654 75.028 45.501 75.028H42.062C34.6975 75.028 29.6913 75.0215 25.8216 74.715C22.0523 74.4163 20.1247 73.8751 18.7801 73.2108C15.5446 71.6123 12.9141 69.0617 11.2656 65.9244C10.5805 64.6206 10.0223 62.7516 9.7143 59.0967C9.39814 55.3446 9.39145 50.4903 9.39145 43.3495V40.0149C9.39145 32.8741 9.39814 28.0199 9.7143 24.2677C10.0223 20.6129 10.5805 18.7438 11.2656 17.44C12.9141 14.3028 15.5446 11.7522 18.7801 10.1537C20.1247 9.48935 22.0523 8.9481 25.8216 8.64949C29.6913 8.34293 34.6975 8.33644 42.062 8.33644Z"
        fill={fillColor}
      />
    </svg>
  );
};

const AgroIndoLogo = ({ fillColor, width="2467", height="2945" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2467 2945"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1462.22 8L913.892 8.00024C911.763 8.00024 909.868 9.34749 909.169 11.3576L680.467 668.876C679.337 672.125 681.75 675.518 685.19 675.518H1130.96C1133.13 675.518 1135.05 676.916 1135.72 678.979L1542.73 1936.68C1666.74 2348.27 1670.19 2461.72 1670.19 2637.8C1670.19 2772.46 1586.44 2882.54 1549.35 2928.48C1546.71 2931.76 1549.04 2936.64 1553.25 2936.64H2449.31C2454.35 2936.64 2457.03 2929.08 2453.48 2925.5C2372.95 2844.15 2236.41 2467.42 2175.13 2279.19L1466.99 11.5096C1466.34 9.42174 1464.41 8 1462.22 8Z"
        fill="#FCFFE7"
        stroke="#FCFFE7"
        stroke-width="14.15"
        stroke-linejoin="round"
      />
      <path
        d="M8 2428.45V2932.46C8 2935.22 10.2386 2937.46 13 2937.46H563.016C563.253 2937.46 563.491 2937.45 563.725 2937.41C822.234 2900.18 1010.08 2583.34 1072.12 2428.64C1072.35 2428.05 1072.46 2427.45 1072.46 2426.82V1873H565.894C233.078 1910.02 54.7173 2257.03 8.1703 2427.16C8.05314 2427.58 8 2428 8 2428.45Z"
        fill="#EB455F"
        stroke="#EB455F"
        stroke-width="14.15"
      />
      <path
        d="M924.621 2065.95L924.621 1874.89C924.621 1872.13 926.859 1869.89 929.621 1869.89H1311.89C1314.06 1869.89 1315.98 1871.29 1316.65 1873.36L1377.88 2064.43C1378.92 2067.65 1376.51 2070.95 1373.12 2070.95H929.621C926.859 2070.95 924.621 2068.72 924.621 2065.95Z"
        fill="#EB455F"
        stroke="#EB455F"
        stroke-width="8"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const AgroIndoLogoTEXT = ({ fillColor, width="1370", height="420" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1370 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M352.492 327.762H416.066C438.215 327.762 457.219 335.691 457.219 360.574C457.219 388.875 430.969 419.637 374.367 419.637C322.824 419.637 308.605 407.332 308.605 396.395C308.605 376.023 343.332 388.055 354.68 374.246H345.52C334.309 374.246 312.023 369.734 312.023 345.125C312.023 326.805 321.594 316.004 348.254 303.289C327.609 297 314.211 283.738 314.211 262.547C314.211 231.785 342.238 217.703 379.973 217.703C385.852 217.703 391.457 217.977 396.789 218.797C396.652 216.883 396.516 214.969 396.516 213.055C396.516 192.273 405.812 176.004 428.098 176.004C441.359 176.004 452.297 182.703 452.297 194.734C452.297 205.398 442.18 213.055 429.328 213.055C416.066 213.055 409.094 207.723 404.309 198.426C402.941 202.391 402.395 207.449 402.395 213.055C402.395 215.242 402.531 217.43 402.805 219.617C428.508 224.539 445.734 238.348 445.734 262.547C445.734 293.309 417.844 307.391 379.973 307.391C370.402 307.391 361.516 306.434 353.449 304.656C346.477 309.305 342.512 312.586 342.512 318.602C342.512 325.027 346.34 327.762 352.492 327.762ZM379.973 222.762C371.086 222.762 365.754 232.605 365.754 262.547C365.754 292.488 371.086 302.332 379.973 302.332C388.996 302.332 394.328 292.488 394.328 262.547C394.328 232.605 388.996 222.762 379.973 222.762ZM382.023 414.852C403.762 414.852 418.391 402 418.391 383.27C418.391 377.664 415.246 374.246 405.539 374.246H360.285C357.414 380.398 356.73 389.148 356.73 392.43C356.73 406.512 365.207 414.852 382.023 414.852ZM568.098 217.703C588.195 217.703 593.801 233.152 593.801 246.004C593.801 262.82 583.41 273.484 568.098 273.484C551.555 273.484 543.078 265.418 543.078 253.387C543.078 240.672 548.957 232.879 557.434 227.273C554.289 227.273 551.281 227.82 548.41 229.188C539.25 233.152 531.867 242.996 531.867 254.207V338.152C531.867 356.062 538.977 361.121 555.93 361.121V367C547.316 366.727 528.586 365.906 510.676 365.906C493.859 365.906 474.445 366.727 465.832 367V361.121C477.316 361.121 481.555 356.609 481.555 341.023V252.156C481.555 235.34 477.59 227.547 465.832 227.547V221.668C471.711 222.215 477.59 222.488 483.195 222.488C501.926 222.488 517.922 221.395 531.867 218.66V238.758C539.25 224.539 551.828 217.703 568.098 217.703ZM672.688 217.703C716.027 217.703 744.602 237.938 744.602 294.539C744.602 351.004 716.027 370.965 672.688 370.965C629.211 370.965 600.637 351.004 600.637 294.539C600.637 237.938 629.211 217.703 672.688 217.703ZM672.688 223.309C661.477 223.309 653 244.363 653 294.539C653 344.578 661.477 365.359 672.688 365.359C683.898 365.359 692.238 344.578 692.238 294.539C692.238 244.363 683.898 223.309 672.688 223.309ZM852.062 168.758V174.363C834.973 175.184 832.102 178.055 832.102 198.426V337.332C832.102 357.703 835.246 360.574 852.062 361.395V367C841.125 366.453 822.668 366.18 805.305 366.18C785.07 366.18 766.066 366.453 755.402 367V361.395C772.492 360.574 775.363 357.703 775.363 337.332V198.426C775.363 178.055 772.219 175.184 755.402 174.363V168.758C766.066 169.305 785.07 169.578 805.305 169.578C822.668 169.578 841.125 169.305 852.062 168.758ZM976.477 217.703C993.566 217.703 1002.73 222.488 1008.06 228.914C1013.66 235.613 1016.26 246.004 1016.26 265.145V341.023C1016.26 356.609 1020.5 361.121 1031.85 361.121V367C1024.33 366.727 1007.24 365.906 992.746 365.906C977.023 365.906 960.48 366.727 952.961 367V361.121C962.531 361.121 965.812 356.609 965.812 341.023V249.969C965.812 238.211 961.848 232.332 952.141 232.332C941.75 232.332 931.906 240.672 931.906 252.43V341.023C931.906 356.609 935.324 361.121 944.895 361.121V367C937.785 366.727 922.473 365.906 907.844 365.906C892.258 365.906 873.938 366.727 865.871 367V361.121C877.355 361.121 881.594 356.609 881.594 341.023V252.156C881.594 235.34 877.629 227.547 865.871 227.547V221.668C871.75 222.215 877.629 222.488 883.234 222.488C901.965 222.488 917.961 221.395 931.906 218.66V238.758C940.93 223.855 956.379 217.703 976.477 217.703ZM1185.38 147.977V336.238C1185.38 353.055 1189.21 360.848 1200.97 360.848V366.727C1195.09 366.18 1189.21 365.906 1183.61 365.906C1164.88 365.906 1149.02 367 1134.93 369.734V349.91C1127.41 364.266 1117.3 370.965 1100.75 370.965C1068.62 370.965 1043.61 348.27 1043.61 293.309C1043.61 242.723 1068.35 217.703 1105.81 217.703C1118.25 217.703 1127.41 219.891 1134.93 224.812V181.609C1134.93 164.793 1130.97 157 1119.21 157V151.121C1125.09 151.668 1130.97 151.941 1136.57 151.941C1155.44 151.941 1171.3 150.848 1185.38 147.977ZM1114.84 356.336C1125.09 356.336 1134.93 347.996 1134.93 336.238V230.691C1130.7 228.094 1125.91 227 1121.81 227C1104.45 227 1095.97 248.875 1095.97 294.266C1095.97 343.758 1104.45 356.336 1114.84 356.336ZM1286.28 217.703C1329.62 217.703 1358.2 237.938 1358.2 294.539C1358.2 351.004 1329.62 370.965 1286.28 370.965C1242.8 370.965 1214.23 351.004 1214.23 294.539C1214.23 237.938 1242.8 217.703 1286.28 217.703ZM1286.28 223.309C1275.07 223.309 1266.59 244.363 1266.59 294.539C1266.59 344.578 1275.07 365.359 1286.28 365.359C1297.49 365.359 1305.83 344.578 1305.83 294.539C1305.83 244.363 1297.49 223.309 1286.28 223.309Z"
        fill="#FCFFE7"
      />
      <path
        d="M179.004 8L119.67 8.00003C117.542 8.00003 115.647 9.34727 114.948 11.3574L90.6066 81.3375C89.4765 84.5867 91.8889 87.9801 95.3291 87.9801H139.349C141.517 87.9801 143.438 89.3777 144.106 91.4407L191.887 239.089C206.745 288.405 207.159 301.998 207.159 323.095C207.159 334.079 202.508 343.698 198.137 350.456C195.85 353.993 198.191 358.901 202.403 358.901H284.939C289.983 358.901 294.989 348.946 292.719 344.442C283.712 326.569 273.157 297.015 267.659 280.127L183.777 11.5096C183.125 9.42174 181.191 8 179.004 8Z"
        fill="#FCFFE7"
        stroke="#FCFFE7"
        stroke-width="14.15"
        stroke-linejoin="round"
      />
      <path
        d="M8 299.6V355C8 357.762 10.2386 360 13 360H74.1873C74.4242 360 74.665 359.983 74.8992 359.948C105.214 355.428 119.187 329.77 126.643 311.386C126.882 310.797 127 310.174 127 309.538V269C127 266.239 129.239 264 132 264H161.874C165.195 264 167.593 260.822 166.682 257.628L160.535 236.087C159.923 233.94 157.96 232.459 155.727 232.459H74.8452C35.3267 236.855 13.9833 277.729 8.17465 298.302C8.05403 298.729 8 299.156 8 299.6Z"
        fill="#EB455F"
        stroke="#EB455F"
        stroke-width="14.15"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default {
  Location,
  Email,
  WhatsApp,
  Telegram,
  StarDeco,
  Compass,
  Instagram,
  AgroIndoLogo,
  AgroIndoLogoTEXT,
};
