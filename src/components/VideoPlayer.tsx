import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

function VideoPlayer({
  src,
  poster,
  title = "Now Playing",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // relance la vidéo quand la source change
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;

    // tentative d'autoplay 
    video.play().catch(() => {});
  }, [src]);

  //rendu
  return (
    <div className="player-wrapper">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        muted
        playsInline
        autoPlay
        className="video-element" 
      />
      <h2>{title}</h2>
    </div>
  );
}

export default VideoPlayer;
