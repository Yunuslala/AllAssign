import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [newTask, setNewTask] = useState({ name: '', Content: '' });

    const Id=useParams();
    console.log(Id)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({
          ...newTask,
          [name]: value,
        });
      };
    const Navigate=useNavigate()
      const handleupdateTask = async() => {
        try {
            const headers = {
                'Authorization':localStorage.getItem("UserToken"),
                'Content-Type': 'application/json',
              }; 
              console.log("object",newTask)
              let obj={};
              if(newTask.name==""){
                obj.Content=newTask.Content
              }
             else if(newTask.Content==""){
                obj.name=newTask.name;
              }else{
                obj.Content=newTask.Content
                obj.name=newTask.name;
              }
              console.log(obj)
            const response=await axios.patch(`http://localhost:5500/Task/update/${Id.taskId}`, obj ,{headers});
            const result=response.data
            console.log("result of task",result);
            Navigate('/Task')
        } catch (error) {
            console.log(error)
        }
        
      };
  return (
    <div>
      <h2 className='task-list'>Edit Task</h2>
      <div>
        <input
        className='task-name'
          type="text"
          name="name"
          placeholder="edit Name"
          value={newTask.name}
          onChange={handleInputChange}
          
        />
      
        <input
         className='task-content'
          type="text"
          name="Content"
          placeholder="edit Content"
          value={newTask.Content}
          onChange={handleInputChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='createbtn' onClick={handleupdateTask}>edit Task</button>
      </div>
    </div>
  )
}

export default Edit
