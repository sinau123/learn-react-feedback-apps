import React, { useContext } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import IFeedback from "../models/FeedbackModel";
import Card from "./shared/Card";

interface FeedbackItemProps {
  item: IFeedback;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
  const { id, rating, text } = item;
  const { removeFeedback, setFeedbackEditData } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => removeFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => setFeedbackEditData(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
