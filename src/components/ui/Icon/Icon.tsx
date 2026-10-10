import React from "react";

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M8 16L16 8M9 8h7v7" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  cross: <path d="M7 7l10 10M17 7L7 17" />,
  plus: <path d="M12 5v14M5 12h14" />,
  spinner: <path d="M12 3a9 9 0 1 0 9 9" />,
};

interface IconProps {
  name: keyof typeof paths;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
