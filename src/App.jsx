import { useState ,useRef, useEffect } from 'react'
import icon from "./assets/icon.png"
import './App.css'

function App() {


 const list = useRef()

  const handleAdd =()=>{
    if (task.value == "") {
      alert("You must write something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = task.value;
      list.current.appendChild(li);
      let remove = document.createElement("span");
      remove.innerHTML = "\u00d7";
      li.appendChild(remove);
    }
    task.value = "";
    savedata();
  }



  const checked =  (e)=> {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  }





  const savedata = () => {
    localStorage.setItem("data", list.current.innerHTML);
  };
  const viewdata = () => {
    let data = localStorage.getItem("data");
    list.current.innerHTML = data;
  };
  
useEffect(() => {
  viewdata()

}, [])



document.addEventListener("keydown",(event)=>{
  if(event.key === " "){
    task.focus()
  }
   else if (event.key === 'Enter') { 
      handleAdd();
    }
})

  return (
    <>
  <div className="container">
        <div className="app">
            <h1>To-Do list <img src={icon} alt=""/></h1>
            <div className="row">
                <input type="text" name="" id="task" placeholder="Add your task"/>
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul id='list' ref={list} onClick={checked}> 
            </ul>
        </div>
    </div>
    </>
  )
}

export default App
