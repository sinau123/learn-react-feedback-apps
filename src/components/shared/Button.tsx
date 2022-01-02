import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  version?: string;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  version = "primary",
  disabled = false,
}) => {
  return (
    <button type={type} disabled={disabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
