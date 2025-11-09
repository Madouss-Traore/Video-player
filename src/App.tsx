import "./App.css";
import { Video } from "reactjs-media";


function App() {
  return (
    <div className="App">
      <h1>Madouss Player</h1>
      <p>Custom video player</p>
      <div className="player-wrapper">
        <Video
        src="/nature.mp4"
        controls={true}
        width={800}
        height={450}
        poster="/nature-image.png"
        />
      </div>
       
    </div>
  );
}

export default App;