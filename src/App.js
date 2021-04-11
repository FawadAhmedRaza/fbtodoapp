import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'
import db from './firebase/fireConfig'
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Todo } from './components/Todo';
function App() {
const [todo,setTodo]=useState("")
const [todos,setTodos]=useState([])

useEffect(()=>{
getTodo();
console.log(todos)
},[])
const addTodo=()=>{
  db.collection('todos').add({
    InProcess:true? "In Process":"Completed",
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    todo:todo
  })
  setTodo("")
}
const getTodo=()=>{
  db.collection("todos").onSnapshot((query)=>{
   setTodos(query.docs.map((doc)=>(
     {
       id: doc.id,
       timestamp: doc.data().timestamp,
       todo: doc.data().todo,
       status: doc.data().InProcess
     }
   )
    ))
  })
}

  return (

    <div className="Container d-flex justify-content-center " style={{height:"100vh"}}>
    <div>
    <Header/>
    <div className="Container d-flex justify-content-between" >
    <input value={todo} className="w-75 form-control" type="text" onChange={(e)=>setTodo(e.target.value)}/>
    <button className="btn btn-primary" onKeyDown={addTodo} onClick={addTodo} >Add Todo</button>
    </div>
    <Todo data={todos}/>
    </div> 
    </div>
  );
}

export default App;
