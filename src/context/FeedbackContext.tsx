import React, { createContext, useState } from "react";
import FeedbackHelper from "../helpers/models/FeedbackHelper";
import IFeedback from "../models/FeedbackModel";

interface IFeedbackContext {
  feedback: IFeedback[];
  feedbackEditData: IFeedback | undefined;
  addFeedback: (feedback: IFeedback) => void;
  removeFeedback: (id: string) => void;
  editFeedback: (id: string, feedbackData: {}) => void;
  setFeedbackEditData: (feedback: IFeedback | undefined) => void;
}
const FeedbackContext = createContext<IFeedbackContext>({
  feedback: [],
  feedbackEditData: undefined,
  addFeedback: () => {},
  removeFeedback: () => {},
  editFeedback: () => {},
  setFeedbackEditData: () => {},
});

export const FeedbackProvider: React.FC = ({ children }) => {
  const [feedback, setFeedback] = useState(() => {
    return FeedbackHelper.getFeedback();
  });

  const [feedbackEdit, setFeedbackEdit] = useState<IFeedback | undefined>();

  const setFeedbackEditData = (data: IFeedback | undefined) => {
    setFeedbackEdit(data);
  };

  const addFeedback = (newFeedback: IFeedback) => {
    setFeedback(FeedbackHelper.addFeedback(newFeedback));
  };

  const editFeedback = (id: string, newFeedback: Partial<IFeedback>) => {
    FeedbackHelper.editFeedback(id, newFeedback);
    setFeedback(FeedbackHelper.getFeedback());
  };

  const removeFeedback = (id: string) => {
    if (window.confirm("Are you sure to remove item?")) {
      setFeedback(FeedbackHelper.removeFeedback(id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEditData: feedbackEdit,
        addFeedback,
        removeFeedback,
        editFeedback,
        setFeedbackEditData,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
