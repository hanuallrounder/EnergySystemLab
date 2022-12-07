import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TeamCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 , marginBottom:"2rem" }}>
      {/* <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/seed/picsum/200/300"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
          <Typography variant="body2">B.Tech - {data.id}  </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary"> Electronics and Instrumentation Engineering</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">LinkedIn</Button>
        <Button size="small">Contact</Button>
      </CardActions>
    </Card>
  );
}
