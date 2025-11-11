import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import videoList, { type VideoItem } from "./data/videos";
import { useState } from "react";

function App() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videoList[0]);
  return (
    <div className="App">
      <h1 className="title"> MP.</h1>
      <div className="main-layout">
        
        {/* Main player */}
        <div className="main-video">
          <VideoPlayer
            src={activeVideo.src}
            title={activeVideo.title}
            poster={activeVideo.poster}
          />
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <h3>À regarder</h3>
          <ul className="video-list">
            {videoList
             
              // .filter((video) => video.id !== activeVideo.id) 
              .map((video) => (
                <li
                  key={video.id}
                  className={
                    "video-item" +
                    (video.id === activeVideo.id ? " active" : "")
                  }
                  onClick={() => setActiveVideo(video)}
                >
                  {video.id === activeVideo.id && <span className="play-icon">▶</span>}

                  { video.poster && (
                    <img
                      src={video.poster}
                      alt={video.title || "Miniature"}
                      className="video-thumb"
                    />
                  )}
                  <p>{video.title}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
