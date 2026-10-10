import React from "react";
import "./Card.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tile?: boolean;
}

export default function Card({ children, className, tile }: CardProps) {
  return (
    <div
      className={`card${tile ? " card--tile" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
