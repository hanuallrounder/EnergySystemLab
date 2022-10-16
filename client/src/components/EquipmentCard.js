import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nits from "../assets/img/nits.jpg"
export default function EquipmentCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={nits}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Impedance Analyser cum Electrochemical Workstation
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <strong>Specifications</strong>
            <br/>
        Frequency range: 10μHz to 12MHz,
        voltage range of potentiometer: ±5V,
        current range of galvanometer: ±1nA to ±4A.,
        voltage and current measurement accuracy: ±50μV ±5ppm of reading and 0.005% of FS ±0.1% of reading respectively.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Projects</Button>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
