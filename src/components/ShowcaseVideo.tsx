import { useEffect, useRef } from 'react';

interface ShowcaseVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function ShowcaseVideo({
  src,
  poster,
  className = 'w-full h-full object-cover object-center',
}: ShowcaseVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const enforceSpeed = () => {
      if (video.playbackRate !== 1.75) {
        video.playbackRate = 1.75;
      }
      if (video.defaultPlaybackRate !== 1.75) {
        video.defaultPlaybackRate = 1.75;
      }
    };

    enforceSpeed();

    video.addEventListener('play', enforceSpeed);
    video.addEventListener('loadeddata', enforceSpeed);
    video.addEventListener('loadedmetadata', enforceSpeed);
    video.addEventListener('ratechange', enforceSpeed);

    return () => {
      video.removeEventListener('play', enforceSpeed);
      video.removeEventListener('loadeddata', enforceSpeed);
      video.removeEventListener('loadedmetadata', enforceSpeed);
      video.removeEventListener('ratechange', enforceSpeed);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      src={src}
      poster={poster}
      className={className}
    />
  );
}
