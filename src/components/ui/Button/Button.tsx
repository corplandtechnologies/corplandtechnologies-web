import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import playAudio from "../../../utils/helpers/playAudio";
import { SPRING, TAP } from "../../../utils/motion";
import Icon from "../Icon/Icon";
import "./Button.scss";

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  size?: "md" | "lg";
  href?: string;
  to?: string;
  external?: boolean;
  type?: "button" | "submit";
  arrow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  external,
  type = "button",
  arrow,
  loading,
  disabled,
  block,
  onClick,
}: ButtonProps) {
  const className = `btn btn--${variant} btn--${size}${
    block ? " btn--block" : ""
  }${loading ? " btn--loading" : ""}`;

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {loading && <Icon name="spinner" size={18} className="btn__spinner" />}
      {!loading && arrow && (
        <Icon name="arrow" size={18} className="btn__arrow" />
      )}
      {!loading && external && (
        <Icon name="external" size={18} className="btn__arrow" />
      )}
    </>
  );

  if (to) {
    return (
      <MotionLink
        className={className}
        to={to}
        whileTap={TAP}
        transition={SPRING}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
        onClick={onClick}
      >
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        className={className}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileTap={TAP}
        transition={SPRING}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      whileTap={TAP}
      transition={SPRING}
      onMouseDown={playAudio}
      onMouseUp={playAudio}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}
