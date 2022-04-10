import { useEffect, useRef, useState } from 'react';

type VideoProps = {
  videoSrc: string;
  poster?: string;
  muted?: boolean;
  isAutoPlaying?: boolean;
  className?: string;
  isControls?: boolean;
}

export default function Video({
  videoSrc,
  poster,
  muted,
  isAutoPlaying,
  className,
  isControls,
}: VideoProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isAutoPlaying) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      return;
    }

    if (isPlaying) {
      videoRef.current.load();
    }
  }, [isAutoPlaying, isPlaying]);

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
