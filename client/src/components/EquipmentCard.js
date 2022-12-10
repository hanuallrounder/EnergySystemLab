import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import nits from "../assets/img/nits.jpg"

export default function EquipmentCard({item}) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
 const experimentList= item.experimentList;
 console.log(experimentList);
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image={nits}
        alt=""
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <strong>Specifications</strong>
            <br/>
            {item.specifications}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">View Projects</Button> */}
        <Button size="small" onClick={handleClick}>Read More</Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        <Typography gutterBottom variant="body1" component="p">
        List of Experiments
        </Typography>
        <ul style={{margin:"0 15px"}}>

        {experimentList.map((itm,i) =>  <div key={i}> <li>{itm.name}</li></div>)}
 
    </ul>
        </Box>
      </Popper>
      </CardActions>
    </Card>
  );
}
