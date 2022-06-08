import { useCallback, useEffect, useState } from 'react';

function SampleHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 5) {
      alert('Stop ! Reset counter');
      setCount(0);
    }
  }, [count]);

  const updateCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <button onClick={updateCounter}>Increment - {count}</button>
}

export default SampleHooks;
