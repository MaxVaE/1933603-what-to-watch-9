import { ChangeEvent, FormEvent, Fragment, ReactNode, useState, useEffect } from 'react';
import { onReviewFunc } from '../../types/add-review';

type FormAddReviewProps = {
  onReview: onReviewFunc;
};

export default function FormAddReview({
  onReview,
}: FormAddReviewProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(comment.length > 50 && comment.length > 400 && !rating);
  }, [comment, rating]);

  return (
    <div className="add-review">
      <form
        className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
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
            {renderRatings()}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
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
            >
              Post
            </button>
          </div>

        </div>
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
}
