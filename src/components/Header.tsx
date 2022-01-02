import React from "react";

interface HeaderProps {
  text?: string;
}

const Header: React.FC<HeaderProps> = ({ text = "Feedback UI" }) => {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
