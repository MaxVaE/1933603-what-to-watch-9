import { useEffect, useRef } from 'react';

type VideoProps = {
  videoSrc: string;
  poster?: string;
  muted?: boolean;
  isPlaying?: boolean;
  className?: string;
  isControls?: boolean;
}

export default function Video({
  videoSrc,
  poster,
  muted,
  isPlaying,
  className,
  isControls,
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
      className={className}
      src={videoSrc}
      poster={poster}
      muted={muted}
      ref={videoRef}
      controls={isControls}
    />
  );
}
