import { FormEvent, useState } from 'react';
import { onReviewFunc } from '../../types/add-review';

type FormAddReviewProps = {
  onReview: onReviewFunc,
};

export default function FormAddReview({
  onReview,
}: FormAddReviewProps) {
  const [ratings, setRatings] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [message, setMessage] = useState('');

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          onReview({
            rating: ratings.findIndex((rating) => rating) + 1,
            message,
          });
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            {
              ratings.map((rating, index) => {
                const value = index + 1;
                const inputId = `star-${value}`;

                return (
                  <div key={inputId}>
                    <input
                      className="rating__input"
                      id={inputId}
                      type="radio"
                      name="rating"
                      value={value}
                      checked={rating}
                      onChange={() => {
                        setRatings(ratings.map((r, id) => {
                          if (id === index) {
                            return true;
                          }

                          return false;
                        }));
                      }}
                    />
                    <label
                      className="rating__label"
                      htmlFor={inputId}
                    >
                      Rating {value}
                    </label>
                  </div>
                );
              })
            }
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
}
