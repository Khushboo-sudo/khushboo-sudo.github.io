import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export default function GradientText({
  children,
  className = "",
  gradient = "from-amber-200 via-yellow-400 to-amber-500",
}: GradientTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} ${className}`}
    >
      {children}
    </span>
  );
}
