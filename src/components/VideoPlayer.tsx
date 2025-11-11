import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  width?: number;
  height?: number;
}

function VideoPlayer({
  src,
  poster,
  title = "Now Playing",
  width = 800,
  height = 450,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  //relance de la video au changement de la src 
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    
    video.currentTime = 0;

    // tentative d'autoplay
    video.play().catch(() => {
    });
  }, [src]);

  // rendu
  return (
    <div className="player-wrapper">
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls  
      />
      <h2>{title}</h2>
    </div>
  );
}

export default VideoPlayer;
