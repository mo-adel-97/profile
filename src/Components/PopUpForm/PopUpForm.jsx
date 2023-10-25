import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import image from "../../Images/Note3.png";
import axios from 'axios';
import { useState } from 'react';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [noteName,setNoteName] = useState('')
  const [noteContent,setNoteContent] = useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddNote = (e) => {
    e.preventDefault();
    console.log(noteName);
    console.log(noteContent)
    axios.post(`http://localhost:4000/user/${props.ID}/notes`, {
        noteName: noteName,
        noteContent: noteContent
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div>
      <Button variant="outlined" style={{color:"purple",borderColor:"purple"}} onClick={handleClickOpen}>
        Add Daily Note
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth >
        <DialogTitle style={{textAlign:"center",color:"purple"}}>
          <img style={{height:"110px"}} src={image} alt="note" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
             <span style={{color:"purple",fontSize:"20px"}}>Daily Note, </span>Add another daily note for your notes here 
          </DialogContentText>
          <form onSubmit={handleAddNote}>
          <TextField
          required
            autoFocus
            margin="dense"
            id="name"
            label="Note Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e)=>{
                setNoteName(e.target.value)
            }}
          />
         <TextField
         required
          id="noteContent"
          label="NoteContent"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          style={{marginTop:"8px"}}
          onChange={(e)=>{
            setNoteContent(e.target.value)
        }}
          />
          <div style={{justifyContent:"space-around",textAlign:"center",display:"flex",paddingTop:"1rem"}}>
          <Button style={{color:"purple"}} onClick={handleClose}>Cancel</Button>
          <Button type='submit' style={{color:"purple"}}>AddNote</Button>
          </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}