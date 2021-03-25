import React , {useState} from 'react';


const App = () => {
  const [count, setCount] = useState(0)
 
  const increment = () => { 
    setCount(count +1 )
  }

  const decrement = () =>{
    setCount(count-1)
  }

  const incremant2 = () => {
    setCount ((previousCount) => previousCount +1)
  }
  const reset = () => setCount(0)
  const x2 = () => setCount(count*2)

  return (
    <React.Fragment>
    <div>count : {count}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={incremant2}>+1</button>
    <div>
    <button onClick={reset}>RESET</button>
    </div>
    <div>
    <button onClick={x2}>x2</button>
    </div>
    </React.Fragment>
  );
}

export default App;
