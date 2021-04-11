
import db from '../firebase/fireConfig'
export  const Todo = (props) => {
    const deleteTodo=(id)=>{
        db.collection("todos").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <ul className="list-group">
            {
                props.data.map((todo) => (
                    <li  className=" shadow p-2 mt-2  p-0 list-group-item">
                    <div className="p-1 d-flex justify-content-between ">
                    <p align="center" className="mb-0">{todo.todo}</p>
                    <button className="btn btn-danger text-light" id={todo.id} onClick={(e)=>deleteTodo(e.target.id)}>Delete</button>
                    </div>
                    <p className="p-1 m-0">{todo.status}</p>
                    </li>
                ))
            }
            
        </ul>
    )
}