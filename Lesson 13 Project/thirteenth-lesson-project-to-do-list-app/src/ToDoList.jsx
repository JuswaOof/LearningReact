import React, {useState} from 'react'

function ToDoList(){

 const [task,setTask] = useState(['test1', 'test2']);
 const [newTask,setNewTask] = useState('');

 function taskAdd(){
  if(newTask.trim() !== ''){
   setTask(prevTask => [...prevTask, newTask])
   setNewTask("");
 }
 }
 function taskDelete(index){
  const updateTask = task.filter((element, i) => i !== index);
  setTask(updateTask);
 }
 function handleTaskChange(e){
  setNewTask(e.target.value);
 }
 function handleTaskUp(index){
  if(index>0){
   const updatedTask = [...task];
   [updatedTask[index], updatedTask[index - 1]] = 
   [updatedTask[index - 1], updatedTask[index]];
   setTask(updatedTask);
  }
 }
 function handleTaskDown(index){
  if (index < task.length - 1) {
    const updatedTask = [...task];
    [updatedTask[index], updatedTask[index + 1]] = 
    [updatedTask[index + 1], updatedTask[index]];
    setTask(updatedTask)
  }

 }

 return (
   <div className='container'>
     <h1>To Do List App</h1>
     <input
       onChange={handleTaskChange}
       value={newTask}
       placeholder='Add task here...'
       type='text'
     />
     <button className='addButton' onClick={taskAdd}>
       Add
     </button>

     <ol className='listContainer'>
       {task.map((element, index) => (
         <li className='list' key={index}>
           <span className='text' > {element} </span>
           <button className='deleteButton' onClick={() => taskDelete(index)}>
             delete
           </button>
           <button className='moveButton' onClick={() => handleTaskUp(index)}>
             up
           </button>
           <button className='moveButton' onClick={() => handleTaskDown(index)}>
             down
           </button>
         </li>
       ))}
     </ol>
   </div>
 )
}

export default ToDoList