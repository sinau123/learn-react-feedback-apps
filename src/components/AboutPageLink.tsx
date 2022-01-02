import * as React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

interface IAboutPageLinkProps {}

const AboutPageLink: React.FunctionComponent<IAboutPageLinkProps> = (props) => {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutPageLink;
