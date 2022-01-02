import * as React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>Lorem Epsum dolor si amet</p>
        <p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
