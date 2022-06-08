import { useState } from 'react';

function SampleState() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Increment (current {count})</button>;
}

export default SampleState;