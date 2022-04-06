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
        {comments
          .slice(0, getHalfLengthOfArray())
          .map((comment) =>
            (
              <CommentFilm
                key={comment.id}
                comment={comment}
              />
            ),
          )}
      </div>
      <div className="film-card__reviews-col">
        {comments
          .slice(getHalfLengthOfArray(), comments.length)
          .map((comment) =>
            (
              <CommentFilm
                key={comment.id}
                comment={comment}
              />
            ),
          )}
      </div>
    </div>
  );

  function getHalfLengthOfArray() {
    const halfLength = Math.trunc(comments.length / 2);

    return comments.length % 2 === 0
      ? halfLength
      : halfLength + 1;
  }
}

export default ReviewsFilm;
