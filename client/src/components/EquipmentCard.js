import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nits from "../assets/img/nits.jpg"
export default function EquipmentCard({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={nits}
        alt=""
      />
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
        <Button size="small">View Projects</Button>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
