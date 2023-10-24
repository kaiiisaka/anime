import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>tut</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
