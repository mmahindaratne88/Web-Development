const { useState } = React;

const initialState = { count: 0 };

function Counter() {
  const [count, setCount] = useState(initialState.count);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<Counter />, root);
