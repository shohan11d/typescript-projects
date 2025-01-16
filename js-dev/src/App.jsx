import { useState } from 'react';
import './App.css';
import Position from './components/Position';

const data = [
  { title: 'cfo', value: 1, color: 'red', id: Date.now() },
  { title: 'cfo', value: 1, color: 'red', id: Date.now() },
  { title: 'manager', value: 2, color: 'blue', id: Date.now() },
  { title: 'manager', value: 2, color: 'blue', id: Date.now() },

  { title: 'ceo', value: 3, color: 'green', id: Date.now() },
];

function App() {
  const [numberValue, setNumberValue] = useState(2);

  const handleNumberValue = () => {
    setNumberValue((e) => e + 1);
    console.log(numberValue);
    setNumberValue(numberValue + 1);
  };

  return (
    <>
      <p>This is a Number : {numberValue} </p>
      <button onClick={handleNumberValue}>Click me</button>
      {data.map((item) => (
        <Position item={item} />
      ))}
    </>
  );
}

export default App;
