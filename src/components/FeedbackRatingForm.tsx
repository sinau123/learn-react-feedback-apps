import React from "react";

interface FeedbackRatingFormProps {
  onChange?: (ratingValue: number) => void;
  initSelected: number;
}

const FeedbackRatingForm: React.FC<FeedbackRatingFormProps> = ({
  onChange = (rating) => {},
  initSelected,
}) => {
  const selected = initSelected;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    onChange(value);
  };
  const ratingValue = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <ul className="rating">
      {ratingValue.map((value) => {
        return (
          <li key={value}>
            <input
              type="radio"
              id={`Rating-${value}`}
              name="rating"
              value={value}
              checked={selected === value}
              onChange={handleChange}
            />
            <label htmlFor={`Rating-${value}`}>{value}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackRatingForm;
