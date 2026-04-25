import { useState } from 'react';
import ImageCard from './components/ImageCard';
import './App.css';
import { userData } from './constants/constant';

function App() {

  // ✅ FIX 1: correct hook
  const [showFlag, setShowFlag] = useState(false);

  // ✅ FIX 2: proper handler
  const clickHandler = () => {
    setShowFlag(!showFlag);
  };

  return (
    <div className="App">

      {/* ✅ Button to toggle */}
      <button onClick={clickHandler}>
        Toggle Bio
      </button>

      {
        userData.map((user) => (
          <div key={user.githubId}>

            <ImageCard
              name={user.name}
              imgLink={`https://avatars.githubusercontent.com/u/${user.githubId}?v=4`}
            />

            {/* ✅ Student / Mentor */}
            <h3>{user.isStudent ? "Student" : "Mentor"}⬇️⬇️⬇️</h3>

            {/* ✅ FIX 3: proper conditional rendering */}
            {showFlag && (
              <p>{user.bioDescription}</p>
            )}

          </div>
        ))
      }

    </div>
  );
}

export default App;