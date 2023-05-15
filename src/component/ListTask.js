import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import Addtask from './Addtask';


function ListTask() {
    const Tasks = useSelector((state) => state.task.tasks)
    
  return (
    <div className='tasks'>
      <h1 className='to'>To Do List</h1>
      
      <div><Addtask/></div>
      {Tasks.map((item, i) => {
        return <Task card={item} key={i} />;
      })}
    </div>
  );
}

export default ListTask
