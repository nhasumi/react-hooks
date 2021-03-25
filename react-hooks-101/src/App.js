import React , {useState, useEffect} from 'react';


const App = (props) => {

  const[state, setState] = useState(props)
  const{name, price} = state
  

  useEffect(()=>{
    console.log('this is like componentDidMount, componentDidUpdate')
  },)

  useEffect(()=>{
    console.log('useEffect is componentDidMount')
  },[])

  useEffect(()=>{
    console.log('this callback is for name only')
  },[name])

  const renderPeriod = () => {
    console.log('renderPeriod is invoked')
    return "."
  }

   return (
    <div>
       <p>現在の{state.name}は、{renderPeriod()}円です</p>
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
