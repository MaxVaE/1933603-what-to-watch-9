import { api } from '../../store';
import { Film } from '../../types/films';
import { useEffect, useState } from 'react';
import CommentFilm from '../comment-film/comment-film';
import { Comments } from '../../types/comments';
import { APIRoute } from '../../const';

type ReviewsFilmProps = {
  film: Film;
}

function ReviewsFilm({
  film,
}: ReviewsFilmProps) {
  const [comments, setComments] = useState<Comments>([]);

  useEffect(() => {
    async function loadComments() {
      const { data } = await api.get<Comments>(`${APIRoute.Comments}/${film.id}`);
      setComments(data);
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
