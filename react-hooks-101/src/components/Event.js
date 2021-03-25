import React  from 'react';

const Event = (props) => {
    console.log(props)
    const {index, event, dispatch}  = props

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
    }
  
export default Event