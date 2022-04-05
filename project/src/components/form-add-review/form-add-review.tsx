import { ChangeEvent, FormEvent, Fragment, ReactNode, useState, useEffect } from 'react';

import { onReviewFunc } from '../../types/add-review';

type FormAddReviewProps = {
  onReview: onReviewFunc;
  isLoading: boolean;
};

const MIN_TEXTAREA_LENGTH = 50;
const MAX_TEXTAREA_LENGTH = 400;

export default function FormAddReview({
  onReview,
  isLoading,
}: FormAddReviewProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [isClickedOnSubmit, setIsClickedOnSubmit] = useState(false);

  useEffect(() => {
    setIsDisabled(!rating || comment.length < MIN_TEXTAREA_LENGTH);
  }, [comment, rating]);

  return (
    <div className="add-review">
      <form
        className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          setIsClickedOnSubmit(true);
          evt.preventDefault();

          if (!isDisabled) {
            onReview({
              rating,
              comment,
            });
          }
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            {renderErrorForField('Choose rating', !rating)}
            {renderRatings()}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            maxLength={MAX_TEXTAREA_LENGTH}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            required
            disabled={isLoading}
            onChange={(evt) => {
              const { value } = evt.target;
              setComment(value);
            }}
            value={comment}
          >
          </textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isDisabled || isLoading}
            >
              Post
            </button>
          </div>
        </div>

        {renderErrorForField(`Min size ${MIN_TEXTAREA_LENGTH}`, comment.length < MIN_TEXTAREA_LENGTH)}
      </form>
    </div>
  );

  function renderRatings() {
    const ratingList: ReactNode[] = [];

    for (let i = 0; i < 10; i++) {
      const value = i + 1;
      const inputId = `star-${value}`;

      ratingList.push(renderRating(value, inputId));
    }

    return ratingList.reverse();
  }

  function renderRating(value: number, inputId: string) {
    return (
      <Fragment key={inputId}>
        <input
          className="rating__input"
          id={inputId}
          type="radio"
          name="rating"
          value={value}
          disabled={isLoading}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value))}
        />
        <label
          className="rating__label"
          htmlFor={inputId}
        >
          Rating {value}
        </label>
      </Fragment>
    );
  }

  function renderErrorForField(text: string, isChecked: boolean) {
    if (isClickedOnSubmit && isChecked) {
      return (
        <span
          style={{
            color: 'red',
            fontSize: '14px',
            lineHeight: '36px',
          }}
        >
          {text}
        </span>
      );
    }

    return '';
  }
}
