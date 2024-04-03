import { useState } from "react";



const Count = ({  onIncrement, onDecrement }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count => count + 1);
// Pass updated count
  };

  const handleDecrement = () => {
    setCount(count => Math.max(count - 1, 0)); // Prevent negative count
 // Pass updated count
  };

  return (
    <div className="flex gap-3">
      <button className="border rounded-sm bg-lime-300 p-2" onClick={handleDecrement}>-</button>
      <span >{count}</span>
      <button  className="border  rounded-sm bg-green-400  p-2" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Count;
