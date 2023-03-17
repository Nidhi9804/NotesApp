import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function MyNotes() {

    const [data, setData] = useState([]);

    const notes = () => {
        axios.get('https://63eb3a8abfdd4299674348a8.mockapi.io/crud-practice')
            .then(res => {
                console.log(res);
                setData(res.data);
            });
    }
    useEffect(() => {
        notes();
    }, []);

    const handledelete=(id)=>{
        axios.delete(`https://63eb3a8abfdd4299674348a8.mockapi.io/crud-practice/${id}`)
        .then(()=>{
            notes();
        })
    }

    const setLocalStorage=(id , title, description)=>{
        localStorage.setItem("id" , id);
        localStorage.setItem("title" , title);
        localStorage.setItem("description" , description);
    }
    return (

        <>

<div className='row container my-3'>

{data.map((element)=>{
    return(
        <div className='col-md-4'>
        <div className="card" style={{ width: "18rem" }}>
    
             
        <div className="card-body " >
            <div className='titlewrap'>

     <h5 className="card-title">{element.title}</h5>
   </div>
     <p className="card-text">{element.description}</p>

    
    <div className='btn'>

     <Link to ="/update">

     <button className="btn btn-primary" onClick={()=>setLocalStorage(element.id , element.title , element.description)}>EDIT</button>
     </Link>
     <button className="btn btn-primary" onClick={()=>{handledelete(element.id)}}>DELETE</button>
   </div>
       </div>
       
          
    </div>
    </div>
    )
   
})}

</div>



        </>








    )
}

export default MyNotes 