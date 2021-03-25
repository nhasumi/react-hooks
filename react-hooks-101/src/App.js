import React , {useState} from 'react';


const App = (props) => {
  /*
  const initialState = {
    name:'',
    price:1000
  }
  const [name, setName] = useState(initialState.name)
  const [price, setPrice] = useState(initialState.price)
  
  */
  const[state, setState] = useState(props)
  
   return (
    <div>
       <p>現在の{state.name}は、{state.price}円です</p>
       <button onClick={()=>{setState({...state,price:state.price+1})}}>+1</button>
       <button onClick={()=>{setState({...state,price:state.price-1})}}>-1</button>
       <button onClick={()=>{setState(props)}}>REST</button>
       <input value={state.name} onChange={(e)=>{setState({...state,name:e.target.value})}} />
    </div>
  );
}

App.defaultProps ={
    name:'',
    price:1000
}
export default App;
