import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Notes() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handletitle = (e) => {
    setTitle(e.target.value);
  }

  const handledescription = (e) => {
    setDescription(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post('https://63eb3a8abfdd4299674348a8.mockapi.io/crud-practice', {
      title: title,
      description: description,
    }).then(() => {
      navigate("/MyNotes")
    });

  }
  return (
    <>




          <div className='box'>
            <div className='wrap'>
            <form>
        
        <label className="form-label">Title</label>
        <input type="title" className="form-control" onChange={handletitle} />

      
        <label className="form-label " >Description </label>
        <textarea cols='20' rows='10' className="form-control" onChange={handledescription} />
     
      {title}
      {description}

      <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Add Note</button>
      

  </form>
            </div>
     
        </div>



    </>
  )
}

export default Notes