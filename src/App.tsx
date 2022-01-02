import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData, { IFeedback } from "./data/feedbackData";
import logo from "./assets/images/5000x1500.png";
import AboutPage from "./pages/AboutPage";
import AboutPageLink from "./components/AboutPageLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const handleRemove = (id: string) => {
    if (window.confirm("Are you sure to remove item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback: IFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
  return (
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
          <FeedbackForm handleAdd={(newFeedback) => addFeedback(newFeedback)} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList
            feedback={feedback}
            handleRemove={(id) => handleRemove(id)}
          />
        </Route>
        <Route path={"/about"} component={AboutPage} />
      </div>
      <AboutPageLink />
    </Router>
  );
}

export default App;
