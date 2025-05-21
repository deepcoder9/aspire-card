import React from "react";

export const AspireLogo: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110Z"
      fill="white"
    />
    <path
      d="M84.6863 52.3137L60 27.6274L35.3137 52.3137L60 77L84.6863 52.3137Z"
      fill="#4CD964"
    />
  </svg>
);

export const FreezeIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#325Baf"
      fillOpacity="0.8"
    />
    <path
      d="M8 12H16M12 16V8"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const SpendLimitIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#325BaF"
      fillOpacity="0.8"
    />
    <path
      d="M7 12H17M15 9L17 12L15 15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GPay: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="white" />
    <path
      d="M6 12.5H10.5M10.5 12.5V9M10.5 12.5L6 9"
      stroke="#4285F4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 9V15"
      stroke="#EA4335"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 9V15"
      stroke="#34A853"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.5 12H18"
      stroke="#FBBC05"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ReplaceCardIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#325BaF"
      fillOpacity="0.8"
    />
    <path
      d="M15 16L12 13M12 13L9 16M12 13V19M19 10C19 8.93913 18.5786 7.92172 17.8284 7.17157C17.0783 6.42143 16.0609 6 15 6H9C7.93913 6 6.92172 6.42143 6.17157 7.17157C5.42143 7.92172 5 8.93913 5 10"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CancelCardIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="#325BaF"
      fillOpacity="0.8"
    />
    <path
      d="M15 9L9 15M9 9L15 15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const VisaLogo: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 60 20" fill="none" className={className}>
    <path
      d="M22.9657 19.9314H18.1373L21.0607 0.135497H25.889L22.9657 19.9314Z"
      fill="white"
    />
    <path
      d="M43.1949 0.649795C42.2035 0.251325 40.654 -0.013875 38.7402 0.000458333C34.1159 0.000458333 30.8939 2.36033 30.8648 5.756C30.8357 8.28825 33.2085 9.69238 34.9839 10.5458C36.7884 11.4142 37.3715 11.9735 37.3715 12.731C37.3422 13.9228 35.8953 14.4672 34.5512 14.4672C32.6228 14.4672 31.5887 14.1701 30.0538 13.4427L29.4269 13.1455L28.7708 17.2593C29.9496 17.8037 32.1517 18.288 34.4347 18.3028C39.3671 18.3028 42.5307 15.9727 42.5598 12.3636C42.5744 10.3456 41.2886 8.7993 38.5954 7.5482C36.9877 6.74958 35.9827 6.20488 35.9972 5.41625C35.9972 4.71908 36.7592 3.99183 38.4328 3.99183C39.8063 3.96213 40.8549 4.3458 41.6374 4.72958L42.0994 4.96725L42.7408 1.02775L43.1949 0.649795Z"
      fill="white"
    />
    <path
      d="M49.7599 13.0603C50.1492 12.0293 51.5373 8.05235 51.5373 8.05235C51.5227 8.08205 51.9266 6.91005 52.1587 6.19263L52.4781 7.87855C52.4781 7.87855 53.2607 12.1876 53.4344 13.0603C52.6518 13.0603 50.7525 13.0603 49.7599 13.0603ZM55.6053 0.135497H51.9993C50.9651 0.135497 50.1825 0.461997 49.7453 1.66399L42.9637 19.9314H47.8776C47.8776 19.9314 48.6018 17.7988 48.7901 17.259C49.3003 17.259 53.7966 17.259 54.4673 17.259C54.6264 17.9562 55.0158 19.9314 55.0158 19.9314H59.3571L55.6053 0.135497Z"
      fill="white"
    />
    <path
      d="M16.5879 0.135497L11.966 13.4724L11.4558 10.9643C10.6149 8.19923 8.12672 5.17093 5.37305 3.52423L9.61851 19.9165H14.5616L21.5271 0.135497H16.5879Z"
      fill="white"
    />
    <path
      d="M7.57662 0.135497H0.0430279L0 0.461997C5.83206 1.95533 9.69312 5.14123 11.4558 10.9643L9.79755 2.09783C9.52549 0.89598 8.65752 0.164847 7.57662 0.135497Z"
      fill="white"
    />
  </svg>
);

export const ProfileIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "white",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      fill={color}
    />
  </svg>
);

export const CardDetailsIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke="#325BAF"
      strokeWidth="2"
    />
    <path d="M7 12H10" stroke="#325BAF" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M14 12H17"
      stroke="#325BAF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const TransactionsIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19 5V19H5V5H19ZM21 3H3V21H21V3ZM17 17H7V16H17V17ZM17 13H7V14H17V13ZM17 9H7V10H17V9ZM9 7H7V12H9V7Z"
      fill="#325BAF"
    />
  </svg>
);

export const RefundIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="#325BAF" />
    <path
      d="M8 12H16M8 12L10 10M8 12L10 14"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChargeIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="#325BAF" />
    <path
      d="M12 8V16M12 16L14 14M12 16L10 14"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MegaPhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="13.954" 
    viewBox="0 0 16 13.954"
    className={className}
  >
    <defs>
      <style>{`.a{fill:#f25195;}`}</style>
    </defs>
    <path 
      className="a"
      d="M461.668,106.512v5.271a2.989,2.989,0,0,0,0-5.271Zm0,0" 
      transform="translate(-447.247 -103.191)"
    />
    <path 
      className="a" 
      d="M5.04,101.18V95.2H1.73A1.732,1.732,0,0,0,0,96.93v2.52a1.732,1.732,0,0,0,1.73,1.73Zm0,0" 
      transform="translate(0 -92.233)"
    />
    <path 
      className="a" 
      d="M196.75,0a1.53,1.53,0,0,0-.626.142l-5.757,2.579a.465.465,0,0,1,.009.093V9.086a.466.466,0,0,1-.009.093l5.756,2.579a1.53,1.53,0,0,0,.626.142h0a1.135,1.135,0,0,0,.87-.385,1.376,1.376,0,0,0,.316-.924V1.309A1.2,1.2,0,0,0,196.75,0Zm0,0" 
      transform="translate(-184.438)"
    />
    <path 
      className="a" 
      d="M32.889,312.787a2.665,2.665,0,0,1-.721-.1l.517,2.585a2.065,2.065,0,0,0,1.968,1.614,1.732,1.732,0,0,0,1.73-1.73V312.8l-.018-.008Zm0,0" 
      transform="translate(-31.159 -302.932)"
    />
  </svg>
);

export const TravelIcon = ({
  className = "",
  width = 16,
  height = 16,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16.001 16"
    className={className}
  >
    <g transform="translate(0 -0.016)">
      <path
        fill="#00d6b5"
        d="M15.848,2A1.678,1.678,0,0,0,15.71.307,1.679,1.679,0,0,0,14.021.17,4.984,4.984,0,0,0,12.057,1.4L10.23,3.23,2.638,1.414a.332.332,0,0,0-.342.091L.834,2.967a.352.352,0,0,0-.1.308.383.383,0,0,0,.194.274l5.8,3.185L3.768,9.692l-2.215-.6a.235.235,0,0,0-.091-.012.355.355,0,0,0-.263.1L.1,10.285a.391.391,0,0,0-.1.285.341.341,0,0,0,.148.263l2.877,2.158,2.158,2.877a.411.411,0,0,0,.274.149h.023a.356.356,0,0,0,.263-.1l1.1-1.1a.348.348,0,0,0,.091-.354l-.605-2.215L9.283,9.292l3.185,5.8a.316.316,0,0,0,.24.183.251.251,0,0,0,.08.011A.323.323,0,0,0,13,15.218l1.462-1.1a.346.346,0,0,0,.137-.377L12.777,5.8l1.838-1.838A4.987,4.987,0,0,0,15.848,2Z"
        transform="translate(0 0)"
      />
    </g>
  </svg>
);

export const FileStorageIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15.205"
    viewBox="0 0 16 15.205"
    className={className}
  >
    <g transform="translate(0 -11.008)">
      <g transform="translate(0.798 15.853)">
        <g transform="translate(0 0)">
          <path
            fill="#009dff"
            d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
            transform="translate(-22.016 -146.176)"
          />
        </g>
      </g>
      <g transform="translate(0 11.008)">
        <g transform="translate(0 0)">
          <path
            fill="#009dff"
            d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
            transform="translate(0 -11.008)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const BussinessCardIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="10" 
    height="7.862" 
    viewBox="0 0 10 7.862"
    className={className}
  >
    <defs>
      <style>{`.a{fill:#fff;}`}</style>
    </defs>
    <g transform="translate(0 -84.598)">
      <path 
        className="a" 
        d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z" 
        transform="translate(0 -125.106)"
      />
      <path 
        className="a" 
        d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z" 
        transform="translate(0 -0.736)"
      />
    </g>
  </svg>
);

export const Wallet: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "white",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M3 9L12 13L21 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16 11V7" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Settings: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#325BAF",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRight: React.FC<{ className?: string }> = ({
  className = "#325BAF",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 18L15 12L9 6"
      stroke="#325BAF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CreditCard: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#00D54B",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke={color}
      strokeWidth="2"
    />
    <path d="M3 10H21" stroke={color} strokeWidth="2" />
    <path d="M7 14H10" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Home: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "#325BAF",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Eye: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
      fill="#4ADE80"
    />
  </svg>
);

export const PlusCircle: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "white",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDown: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 9L12 15L18 9"
      stroke="#325BAF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
