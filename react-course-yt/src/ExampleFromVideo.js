import { useEffect, useState } from 'react';
import './App.css';



const App = () => {
  const [count, setCount] = useState(0);

  //add [] as second parameter -> dependency array
  //if you leave it empty, the callabck function only calls at the initial load of the component
  //if it's not empty, its gonna update everytime the component changes
  useEffect(
    () => alert("You've changed the counter to: " + count),
     [count]
  );

  return (
    <div className="App">
      <button onClick={() => setCount((prevCount) => prevCount - 1 )}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevsCount) => prevsCount + 1)}>+</button>
    </div>
  );
}

export default App;
