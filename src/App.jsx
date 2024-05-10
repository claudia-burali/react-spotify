
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpotifySidebar from "./components/SpotifySidebar";
import SpotifyPlayer from './components/SpotifyPlayer';
import SpotifyMain from './components/SpotifyMain';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <SpotifySidebar />
          <Routes>
            <Route path="/" element={<SpotifyMain />} />
          </Routes>
          <SpotifyPlayer />
        </BrowserRouter>
      </div>
  );
}

export default App;

