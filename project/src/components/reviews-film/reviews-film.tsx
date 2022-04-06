import { useEffect, useState } from 'react';

import { api } from '../../store';
import { APIRoute } from '../../const';
import { Film } from '../../types/films';
import { Comments } from '../../types/comments';
import CommentFilm from '../comment-film/comment-film';

type ReviewsFilmProps = {
  film: Film;
}

function ReviewsFilm({
  film,
}: ReviewsFilmProps): JSX.Element {
  const [comments, setComments] = useState<Comments>([]);

  useEffect(() => {
    function loadComments() {
      api.get<Comments>(`${APIRoute.Comments}/${film.id}`)
        .then(({ data }) => {
          setComments(data);
        });
    }


    loadComments();
  }, [film.id]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {renderComments(0, getHalfLengthOfArray())}
      </div>
      <div className="film-card__reviews-col">
        {renderComments(getHalfLengthOfArray(), comments.length)}
      </div>
    </div>
  );

  function getHalfLengthOfArray() {
    const halfLength = Math.trunc(comments.length / 2);

    return comments.length % 2 === 0
      ? halfLength
      : halfLength + 1;
  }

  function renderComments(minRange: number, maxRange: number) {
    return comments
      .slice(minRange, maxRange)
      .map((comment) =>
        (
          <CommentFilm
            key={comment.id}
            comment={comment}
          />
        ),
      );
  }
}

export default ReviewsFilm;
