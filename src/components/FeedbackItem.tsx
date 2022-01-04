import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import IFeedback from "../models/FeedbackModel";
import Card from "./shared/Card";

interface FeedbackItemProps {
  item: IFeedback;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({
  item: { id, rating, text },
}) => {
  const { removeFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => removeFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
