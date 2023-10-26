import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import "./Card.css"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShowDailogNote(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="solid" style={{backgroundColor:"purple",color:"white"}} onClick={handleClickOpen}>
        show
      </Button>
      <Dialog
      className="dialog"
        open={open}
        // TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        // aria-describedby="alert-dialog-slide-description"
      >
             <Card
             className="CARD"
      variant="solid"
      invertedColors
      sx={{
        bgcolor:'purple',
        boxShadow: 'lg',
        // to make the demo resizeable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <div>
        <Typography level="h2">
          Daily Note {' '}
        </Typography>
      </div>
      <CardContent>
        <Typography level="title-lg">{props.title}</Typography>
        <Typography level="body-md">
           {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClose} style={{fontSize:"20px",letterSpacing:"2px"}} variant="solid">OK</Button>
      </CardActions>
    </Card>
      </Dialog>
    </div>
  );
}