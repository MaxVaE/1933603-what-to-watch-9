import { useEffect, useRef } from 'react';

type VideoProps = {
  videoSrc: string;
  poster: string;
  muted?: boolean;
  isPlaying?: boolean;
}

export default function Video({
  videoSrc,
  poster,
  muted = false,
  isPlaying,
}: VideoProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      src={videoSrc}
      poster={poster}
      muted={muted}
      ref={videoRef}
    />
  );
}
