import React, { createContext, useState } from "react";
import FeedbackHelper from "../helpers/models/FeedbackHelper";
import IFeedback from "../models/FeedbackModel";

interface IFeedbackContext {
  feedback: IFeedback[];
  addFeedback: (feedback: IFeedback) => void;
  removeFeedback: (id: string) => void;
}
const FeedbackContext = createContext<IFeedbackContext>({
  feedback: [],
  addFeedback: () => {},
  removeFeedback: () => {},
});

export const FeedbackProvider: React.FC = ({ children }) => {
  const [feedback, setFeedback] = useState(() => {
    return FeedbackHelper.getFeedback();
  });

  const addFeedback = (newFeedback: IFeedback) => {
    setFeedback(FeedbackHelper.addFeedback(newFeedback));
  };

  const removeFeedback = (id: string) => {
    if (window.confirm("Are you sure to remove item?")) {
      setFeedback(FeedbackHelper.removeFeedback(id));
    }
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, removeFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
