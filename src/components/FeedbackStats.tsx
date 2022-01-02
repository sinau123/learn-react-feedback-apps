import React from "react";
import IFeedback from "../models/FeedbackModel";

interface FeedbackStatsProps {
  feedback: IFeedback[];
}

const FeedbackStats: React.FC<FeedbackStatsProps> = ({ feedback }) => {
  const sumRating = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);

  const averageRating = sumRating / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Review(s)</h4>
      <h4>
        Average Rating:{" "}
        {isNaN(averageRating) ? 0 : +averageRating.toFixed(1).toLocaleString()}
      </h4>
    </div>
  );
};

export default FeedbackStats;
