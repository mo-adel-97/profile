import React from 'react'
import { useEffect,useState } from 'react';
import { Button } from '@mui/material';
import FormDialog from '../PopUpForm/PopUpForm';
import CongratCard from '../NoteCard/NoteCard';
export default function DailyNote(props) {
    const [data,setData] = useState("");
const id = props.id

      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://localhost:4000/Specificuser/${props.id}`);
          const newData = await response.json();
          setData(newData);
        };
      
        fetchData();
      }, [props.id]);
      console.log(data);
  return (
    <div>
     <h1 style={{letterSpacing:"2px",wordSpacing:"4px"}}> Hi, <span style={{color:"purple"}}> {data.username} </span> </h1>
     <div style={{textAlign:"left",width:"100%"}}>
    <FormDialog ID={id} />
    <br />
    <CongratCard ID={id} />
    </div>
    </div>
  )
}
