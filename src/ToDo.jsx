import React, {useState} from "react"
function ToDoList(){
    const [tasks,setTasks] = useState(["Eat the breakfast", "Take a shower", "Walk the dog"])
    const [newTask,setNewTask] = useState()

    const inputTask = (e)=>{
        setNewTask(()=>e.target.value)

    }
    const addTask = ()=>{
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask])
            setNewTask("")
        }
    }
    const removeTask = (index)=>{
        const updatedTask = tasks.filter((_,i)=>i!==index)
        setTasks(updatedTask)
        
    }
    const moveTaskUp = (index) => {
        if (index > 0) {
            const upTask = [...tasks];
            [upTask[index], upTask[index - 1]] = [upTask[index - 1], upTask[index]];
            setTasks(upTask);
        }
    }
    
    const moveTaskDown = (index)=>{
        if(index < tasks.length-1){
            const downTask = [...tasks];
            [downTask[index], downTask[index + 1]] = [downTask[index + 1], downTask[index]];
            setTasks(downTask);
        }
        
    }

    return(
        <div className="to_do_list" >
            <h1>To-Do-List</h1>

            <div >
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={inputTask}/>
                <button className="add_btn" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((elmt,index)=><li key={index}><span className="text">{elmt}</span>
                <button className="del_btn" onClick={()=>removeTask(index)}>Delete</button>
                <button className="move_btn" onClick={()=>moveTaskUp(index)}>👆</button>
                <button className="move_btn" onClick={()=>moveTaskDown(index)}>👇</button></li>)}
            </ol>
        </div>
    )

}
export default ToDoList