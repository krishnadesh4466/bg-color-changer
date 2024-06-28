import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='maindiv' style={{ backgroundColor: color }}>
        <button className="button bg-red-700" onClick={() => setColor("red")}>Red</button>
        <button className="button bg-pink-300" onClick={() => setColor("pink")}>Pink</button>
        <button className="button bg-blue-800" onClick={() => setColor("blue")}>Blue</button>
        <button className="button bg-green-800" onClick={() => setColor("green")}>Green</button>
        <button className="button bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="button bg-purple-800" onClick={() => setColor("purple")}>Purple</button>

      </div>
    </>
  );
}

export default App;
