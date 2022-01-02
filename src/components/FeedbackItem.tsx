import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import { IFeedback } from "../data/feedbackData";

interface FeedbackItemProps {
  item: IFeedback;
  handleRemove: (id: string) => void;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({
  item: { id, rating, text },
  handleRemove,
}) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleRemove(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;