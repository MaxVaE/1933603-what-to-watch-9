import { ChangeEvent, FormEvent, Fragment, ReactNode, useState } from 'react';
import { onReviewFunc } from '../../types/add-review';

type FormAddReviewProps = {
  onReview: onReviewFunc;
};

export default function FormAddReview({
  onReview,
}: FormAddReviewProps) {
  const [ratings, setRatings] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div className="add-review">
      <form
        className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          onReview({
            rating: ratings,
            message,
          });
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
              setMessage(value);
            }}
            value={message}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
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
          onChange={(evt: ChangeEvent<HTMLInputElement>) => setRatings(Number(evt.target.value))}
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
