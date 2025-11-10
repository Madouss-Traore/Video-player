import { Video } from "reactjs-media";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  width?: number;
  height?: number;
}

function VideoPlayer({
  src,
  poster = "https://placehold.co/800x450/000000/FFFFFF?text=Madouss+Player",
  title = "Now Playing",
  width = 800,
  height = 450,
}: VideoPlayerProps) {
  return (
    <div className="player-wrapper">
      <h2>{title}</h2>

      <Video
        src={src}
        controls={true}
        width={width}
        height={height}
        poster={poster}
      />
    </div>
  );
}

export default VideoPlayer;
