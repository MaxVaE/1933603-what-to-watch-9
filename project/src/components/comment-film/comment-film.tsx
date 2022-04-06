import { Comment } from '../../types/comments';

type CommentFilmProps = {
  comment: Comment;
}

function CommentFilm({
  comment,
}: CommentFilmProps): JSX.Element {

  return (
    <div className="review"
      style={{
        borderColor: 'rgba(255,255,255,.24)',
      }}
    >
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date.split('T')[0]}>{parseDate()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );

  function parseDate() {
    const date = new Date(comment.date);
    const year = date.getFullYear();
    const month = parseMonth(date.getMonth());
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
  }

  function parseMonth(month: number) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'Мay',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months[month];
  }
}

export default CommentFilm;
