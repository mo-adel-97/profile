import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { useState,useEffect } from 'react';
import "./NoteCard.css"
import ShowDailogNote from '../ComponentShowPopUp';
export default function CongratCard(props) {
    const [data,setData] = useState([]);
    // const [content, setContent] = useState('');

      const getPreviewText = (content) => {
        const words = content.split(' ');
        if (words.length <= 3) {
          return content;
        }
        return words.slice(0, 3).join(' ') + `...ClickShow`;
      };
      
          useEffect(() => {
            const fetchData = async () => {
              const response = await fetch(`http://localhost:4000/specificuser/${props.ID}/notes`);
              const newData = await response.json();
              setData(newData);
            };
          
            fetchData();
          }, [props.ID]);
  return (
    <div className="card">
  {data.map((note) => (
     <Card
     key={note.id}
   data-resizable
   className="cadrall"
   sx={{
     textAlign: 'center',
     alignItems: 'center',
     // to make the demo resizable
     overflow: 'auto',
     resize: 'horizontal',
     '--icon-size': '100px',
   }}
 >
   <CardOverflow variant="solid" style={{backgroundColor:"purple"}}>
     <AspectRatio
       variant="outlined"
       color="warning"
       ratio="1"
       sx={{
         m: 'auto',
         transform: 'translateY(50%)  ',
         borderRadius: '50%',
         width: 'var(--icon-size)',
         boxShadow: 'sm',
         bgcolor: 'background.surface',
         position: 'relative',
       }}
     >
       <div>
         <NoteAltOutlinedIcon sx={{ fontSize: '4rem',color:"purple" }} />
       </div>
     </AspectRatio>
   </CardOverflow>
   <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
     🎊 {note.title} 🎊
   </Typography>
   <CardContent sx={{ maxWidth: '40ch'}} style={{}}>
      {getPreviewText(note.body)}
   </CardContent>
   <CardActions
     orientation="vertical"
     buttonFlex={1}
     sx={{
       '--Button-radius': '40px',
       width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
       display:'inline-block'
     }}
   >
     <ShowDailogNote title={note.title} body={note.body} />
     <Button variant="plain" color="neutral">
       Delete
     </Button>
   </CardActions>
 </Card>
      ))}
    </div>
  );
}