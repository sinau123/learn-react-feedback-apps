import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import logo from "./assets/images/5000x1500.png";
import AboutPage from "./pages/AboutPage";
import AboutPageLink from "./components/AboutPageLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router
        basename={
          process.env.NODE_ENV === "development"
            ? undefined
            : process.env.PUBLIC_URL
        }
      >
        <div className="container">
          <img className="logo" src={logo} alt="Logo" />
          <Route exact path="/">
            <Header text={undefined} />
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </Route>
          <Route path={"/about"} component={AboutPage} />
        </div>
        <AboutPageLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
