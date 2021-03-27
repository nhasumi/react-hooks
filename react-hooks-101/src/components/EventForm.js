import React, {useState, useContext} from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENT , ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS} from '../actions'
import AppContext from '../contexts/AppContext'
import {timeCurrentIso8601} from '../utils' 

const EventForm = () =>{
  const {state, dispatch} = useContext(AppContext)
//const EventForm = ({state, dispatch}) =>{
//const {state, dispatch} = props
    const [title, setTitle] = useState('') 
    const [body, setBody] = useState('') 
  
    const addEvent = (e) => {
      e.preventDefault()
      const action = {type:CREATE_EVENT, title, body}
      dispatch(action)

      const actionOperationLog = {type:ADD_OPERATION_LOG, 
          description:'イベントを作成しました。',
          operatedAt:timeCurrentIso8601()}
      dispatch(actionOperationLog)
    }
  
    const deleteAllEvent = (e) => {
      e.preventDefault()
      const result = window.confirm("全てのイベントを削除しますが宜しいでしょうか？")
      if (result){ 
        const action = {type:DELETE_ALL_EVENT}
        dispatch(action)

        const actionOperationLog = {
          type:ADD_OPERATION_LOG, 
          description:'イベントを削除しました。',
          operatedAt:timeCurrentIso8601()}
        dispatch(actionOperationLog)
      }
    }
    


    const deleteAllOperationLogs = (e) => {
      e.preventDefault()
      const result = window.confirm("全ての操作ログを削除しますが宜しいでしょうか？")
      if (result){ 
        const action = {type:DELETE_ALL_OPERATION_LOGS}
        dispatch(action)
      }
    }

    const unCreatable =(title === "" || body ==="")

    return (
        <React.Fragment>
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
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.events.length===0}>全てのイベントを削除する</button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length===0}>全ての操作ログを削除する</button>
        </form>
        </React.Fragment>
    )
}

export default EventForm