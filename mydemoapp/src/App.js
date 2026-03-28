import ImageCard from "./components/ImageCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageCard name="Debayan Roy" imgLink="https://avatars.githubusercontent.com/u/172286422?v=4" />
      <ImageCard name="Subhratanu saha" imgLink="https://avatars.githubusercontent.com/u/64859956?v=4" />
      <ImageCard name="Tanima Nag" imgLink="https://avatars.githubusercontent.com/u/171805697?v=4" />
      <ImageCard name="Soumodeep M" imgLink="https://avatars.githubusercontent.com/u/221869256?v=4" />
      <ImageCard name="Sayan Sengupta" imgLink="https://avatars.githubusercontent.com/u/261204091?v=4" />
    </div>
  );
}

export default App;