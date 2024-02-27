import axios from 'axios';
import React, { useState, useEffect, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', Content: '' });
  const [flag,setFlag]=useState(false);
  const navigate = useNavigate();

useEffect(()=>{
fetchTask()
},[flag])
const fetchTask=async()=>{
    const headers = {
        'Authorization':localStorage.getItem("UserToken"),
        'Content-Type': 'application/json',
      }; 

    const res=await axios.get('http://localhost:5500/Task/get',{headers});
    const task=res.data
    console.log(task)
    setTasks(task)
}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleCreateTask = async() => {
    try {
        const headers = {
            'Authorization':localStorage.getItem("UserToken"),
            'Content-Type': 'application/json',
          }; 
          console.log("object",newTask)

        const response=await axios.post('http://localhost:5500/Task/add', newTask ,{headers});
        const result=response.data
        console.log("result of task",result);
        setFlag((prev)=>!prev)
    } catch (error) {
        console.log(error)
    }
    
  };


  const handleDeleteTask=async(id)=>{
    console.log("id",id)
    const headers = {
      'Authorization':localStorage.getItem("UserToken"),
      'Content-Type': 'application/json',
    }; 
    const deleteTask=await axios.delete(`http://localhost:5500/Task/deleteTask/${id}` ,{headers});
    const result=deleteTask.data;
    setFlag((prev)=>!prev)
  }

  return (
    <div>
      <h2 className='task-list'>Task List</h2>
      <div>
        <input
        className='task-name'
          type="text"
          name="name"
          placeholder="Task Name"
          value={newTask.name}
          onChange={handleInputChange}
          
        />
        <input
         className='task-content'
          type="text"
          name="Content"
          placeholder="Task Content"
          value={newTask.Content}
          onChange={handleInputChange}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='createbtn' onClick={handleCreateTask}>Create Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id+Date.now()}>
          <div className='task-todo-list'>
                <p className='task-name-todo'>{task.name}</p>
                <p>{task.Content}</p>
                <button className='editbtn' onClick={() => navigate(`/edit/${task._id}`)}>Edit</button>&nbsp;
            <button className='deletebtn' onClick={() => handleDeleteTask(task._id)}>Delete</button>
              </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
