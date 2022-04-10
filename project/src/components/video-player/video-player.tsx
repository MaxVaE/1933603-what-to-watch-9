import { Film } from '../../types/films';
import Video from '../video/video';

type VideoPlayerProps = {
  film: Film;
  onClose: () => void;
}

export default function VideoPlayer({
  film,
  onClose,
}: VideoPlayerProps): JSX.Element {

  return (
    <div className="player">
      <Video
        className="player__video"
        videoSrc={film.videoLink}
        isControls
      />

      <button
        type="button"
        className="player__exit"
        onClick={onClose}
      >
        Exit
      </button>
    </div>
  );
}
