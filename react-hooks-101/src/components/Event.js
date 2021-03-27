import React ,{useContext} from 'react';
import { DELETE_EVENT,ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext'
import {timeCurrentIso8601} from '../utils' 

const Event = ({index, event}) => {
//const Event = (props) => {
//  const {index, event, dispatch}  = props
    const {dispatch} = useContext(AppContext)
    const id = event.id
    
    const handledeleteEvent = () => {
        const result = window.confirm(`イベント(ID=${id})を削除しますが宜しいでしょうか？`)
        if (result){ 
            const action = {type:DELETE_EVENT, id}
            dispatch(action)

            const actionOperationLog = {type:ADD_OPERATION_LOG, 
            description:`イベント(ID=${id})を削除しました。`,
            operatedAt:timeCurrentIso8601()}
            dispatch(actionOperationLog)
        }
      }

      return (
        <tr key={index}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button  className="btm btn-danger" onClick={handledeleteEvent}>削除</button></td>
        </tr>  
      )
    }
  
export default Event