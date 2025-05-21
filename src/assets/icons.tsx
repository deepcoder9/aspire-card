import React from "react";

export const BussinessCardIcon = ({
  className = "",
}: {
  className?: string;
}) => (
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
