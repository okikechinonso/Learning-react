import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number,setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={
        () => {
          setNumber(number + 10)
          setNumber(n => n+1);
          }
        }>11</button>
    </>
  );
}

export default App;
