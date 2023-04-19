import './App.css';
import { useState } from 'react';
import Counter from './basic/components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className="counters">
        <Counter total={count} handleClick={handleClick} />
        <Counter total={count} handleClick={handleClick} />
      </div>
    </div>
  );
}
