import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import reducer from '../reduces'
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'

const App = () => {

  const [state, dispatch] = useReducer(reducer,[])

  return (
    <AppContext.Provider value = {"Hello, I ama a Provider"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App;
