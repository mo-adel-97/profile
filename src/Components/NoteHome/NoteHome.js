import React from "react";
import "./NoteHome.css";
import image from "../../Images/noteImage.jpg"
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';


export function Note() {
const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/login')
  }
 return(
    <div className="noteRote">
     <div className="homepage">
        <h1 className="title">NoteTacker App</h1>
        <p className="description">Welcome to NoteTacker, your professional note-taking companion. Stay organized, capture your thoughts, and never forget important information again. With NoteTacker, you can create, edit, and manage your notes effortlessly. Whether it's jotting down quick reminders or maintaining detailed project documentation</p>
        <Button onClick={handleClick} style={{marginTop:"15px",width:"250px",backgroundColor:"purple",letterSpacing:"3px",
        wordSpacing:"5px"
    }} variant="contained">sign up</Button>
      </div>

      <div className="para">
        <img className="imagenote" alt="imagenote" src={image} />
      </div>

    </div>
  );
}