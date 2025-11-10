import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <h1>Madouss Player </h1>
      <p>Custom video player</p>

      {/* 1st video */}
      <VideoPlayer
        src="/nature.mp4"
        title="Waterfall"
        poster="/nature-image.png"
      />
    </div>
  );
}

export default App;
