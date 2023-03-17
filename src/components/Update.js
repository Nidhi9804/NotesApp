import axios from 'axios';
import React from 'react'
import { useState ,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
function Update() {
const navigate =useNavigate();
const[id ,setID] =useState(0);
const[title ,setTitle] =useState("");
const[description ,setDescription] =useState("");

const handleupdate=(e)=>{
e.preventDefault();
axios.put(`https://63eb3a8abfdd4299674348a8.mockapi.io/crud-practice/${id}`,
{
    
title:title ,
description : description ,
}).then(()=>{
    navigate("/MyNotes");
})
}



useEffect(() => {
  
    setID(localStorage.getItem("id")) ;
    setTitle(localStorage.getItem("title")) ;
    setDescription(localStorage.getItem("description")) ;

}, []);


const handlechangetitle=(e)=>{
    setTitle(e.target.value)
}
const handlechangedescription=(e)=>{
    setDescription(e.target.value)
}
 return (

<div className='box'>
            <div className='wrap'>
            <form>
        
        <label className="form-label">Title</label>
        <input type="title" className="form-control" onChange={handlechangetitle}  value={title} />

      
        <label className="form-label " >Description </label>
        <textarea cols='20' rows='10' className="form-control" onChange={handlechangedescription} value={description} />
     
      {title}
      {description}

      <button type="submit" className="btn btn-primary my-3"  onClick={handleupdate} >Update Note</button>
      

  </form>
            </div>
     
        </div>
  
  
  
 
  )
}

export default Update