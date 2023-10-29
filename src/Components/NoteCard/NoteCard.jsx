import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { FidgetSpinner } from 'react-loader-spinner';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';
import "./NoteCard.css"
import ShowDailogNote from '../ComponentShowPopUp';
import axios from 'axios';
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

      const [loading, setLoading] = useState(true);
      const [alert, setAlert] = useState(false);

          useEffect(() => {
            const fetchData = async () => {
              const response = await fetch(`https://notes-apis-server.onrender.com/specificuser/${props.ID}/notes`);
              const newData = await response.json();
              setData(newData);
              setLoading(false)
            };
          
            fetchData();
          }, [props.ID]);

  return (
    <div>
      {loading || alert ? <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  />  :  

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
   📝 {note.title} 📝
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
     <Button variant="plain" color="neutral" onClick={()=>{
         Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              setAlert(true)
                axios
                .delete(`https://notes-apis-server.onrender.com/notes/delete/${note.id}`)
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                   setAlert(false)
                if(res.data === "this note deleted") {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                  }
                  window.location.reload();
                })
                .catch((error) => {
                  console.error("Error deleting note:", error);
                  setLoading(false);
                });
            }
          })
     }}>
       Delete
     </Button>
   </CardActions>
 </Card>
      ))}
    </div>  }
    
    </div>
  );
}