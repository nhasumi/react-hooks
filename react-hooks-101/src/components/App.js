import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import reducer from '../reduces'
import Event from './Event'

const App = () => {

  const [state, dispatch] = useReducer(reducer,[])
  const [title, setTitle] = useState('') 
  const [body, setBody] = useState('') 


  const addEvent = (e) => {
    e.preventDefault()
    const action = {type:'CREATE_EVENT', title, body}
    dispatch(action)
  }

  const deleteAllEvent = (e) => {
    e.preventDefault()
    const result = window.confirm("全てのイベントを削除しますが宜しいでしょうか？")
    if (result){ 
      const action = {type:'DELETE_ALL_EVENT'}
      dispatch(action)
    }
  }
  
  const unCreatable =(title === "" || body ==="")

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
    
        <div className="form-group">
          <label htmlFor="formEventBody">タイトル</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={(e)=>{setBody(e.target.value)}}/>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length===0}>全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map((event,index) => <Event key={index} event={event} dispatch={dispatch} />)}

  {/*           {
              state.map((event,index)=>{ 
                const id = event.id

                const handledeleteEvent = () => {
                  const action = {type:'DELETE_EVENT', id}
                  dispatch(action)
                }

                return (
                  <tr key={index}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.body}</td>
                    <td><button  className="btm btn-danger" onClick={handledeleteEvent}>削除</button></td>
                  </tr>  
                )
              })
            } */}
            
          </tbody>
        </table>         
    </div>
    
  );
}

export default App;
