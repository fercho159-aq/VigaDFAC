import type { SVGProps } from "react";

export function DfacLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 30"
      width="120"
      height="30"
      {...props}
    >
      <rect width="30" height="30" rx="4" fill="hsl(var(--primary))" />
      <text
        x="10"
        y="21"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
      >
        D
      </text>
      <text
        x="40"
        y="21"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        DFAC
      </text>
    </svg>
  );
}
