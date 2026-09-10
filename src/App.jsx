import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button clicked");
    console.log("Current count:", count);

    setCount(count + 1);
  }

  return (
    <div>
      <h1>Restaurant Website</h1>

      <p>Count: {count}</p>

      <button onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default App;