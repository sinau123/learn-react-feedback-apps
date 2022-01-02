import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { IFeedback } from "../data/feedbackData";

interface FeedbackListProps {
  feedback: IFeedback[];
  handleRemove: (id: string) => void;
}

const FeedbackList: React.FC<FeedbackListProps> = ({
  feedback,
  handleRemove,
}) => {
  if (!feedback || feedback.length === 0) return <div>No Feedback Yet</div>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
