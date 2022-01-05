import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
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
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
};

export default Button;
