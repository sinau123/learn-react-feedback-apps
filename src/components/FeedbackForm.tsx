import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackRatingForm from "./FeedbackRatingForm";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm: React.FC = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const [maxChar, minChar] = [25, 10];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length === 0) {
      setBtnDisabled(true);
      setMessage("");
    } else if (inputValue.length < minChar) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else if (inputValue.length > maxChar) {
      setBtnDisabled(true);
      setMessage("Text can't be more than 25 characters");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    const textTrim = text.trim();
    const textLength = textTrim.length;

    if (textLength < 10 && textLength > 25) {
      return;
    }

    const newFeedback = { id: uuidv4(), rating, text: textTrim };
    addFeedback(newFeedback);
    setText("");
    setRating(10);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate your service with us</h2>
        <FeedbackRatingForm
          initSelected={rating}
          onChange={(rating) => setRating(rating)}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" version="primary" disabled={btnDisabled}>
            Send
          </Button>
        </div>
        <div className="form__info">
          <div className="form__error-message">{message}</div>
          <div>
            {text.length}/{maxChar} Char(s)
          </div>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
