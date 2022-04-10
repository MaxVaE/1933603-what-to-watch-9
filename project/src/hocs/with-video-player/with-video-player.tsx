import { ComponentType, useState } from 'react';
import { Film } from '../../types/films';
import VideoPlayer from './../../components/video-player/video-player';

type HOCProps = {
  renderPlayer: (film: Film) => void;
};


function withVideoPlayer<T>(Component: ComponentType<T>)
: ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithVideoPlayer(props: ComponentProps): JSX.Element {
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);

    return (
      <Component
        {...props as T}
        onShowVideoPlayer={() => setShowVideoPlayer(true)}
        renderPlayer={(film: Film) => (
          <>
            {
              showVideoPlayer && (
                <VideoPlayer
                  film={film}
                  onClose={() => setShowVideoPlayer(false)}
                />
              )
            }
            <div>123</div>
          </>
        )}
      />
    );
  }

  return WithVideoPlayer;
}

export default withVideoPlayer;
