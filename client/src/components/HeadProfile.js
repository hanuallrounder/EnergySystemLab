import * as React from 'react';
import {Box,Typography,Stack} from '@mui/material';

export default function HeadProfile() {
  return (
    <>
     <Stack
  direction={{ xs: 'column', sm: 'row' }}
  justifyContent="space-evenly"
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
        <img src={'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=5tKH7h0AAAAJ&citpid=1'} alt={"profile"} style={{height:"300px",width:"250px"}}/>
        <Box component="span" >
        <Typography variant="h4" component="h5"  style={ {color:"white"}}> Dr. Munmun Khanra</Typography>
        <Typography variant="body1" component="p"  style={ {color:"white"}}> Associate Professor</Typography>
        <br />
        <Typography variant="body2" component="p"  style={ {color:"white"}}> Department of Electronics and Instrumentation Engineering</Typography>
        <Typography variant="body2" component="p"  style={ {color:"white"}}> National Institute of Technology Silchar</Typography>
        <br />
        <Typography variant="body2" component="p"  style={ {color:"white"}}> Email : munmun@ei.nits.ac.in </Typography>
        <Typography variant="body2" component="p"  style={ {color:"white"}}> Phone : 1223334444</Typography>
        <br />
        <Typography variant="body2" component="span"  style={ {color:"white"}}>  <a href="https://www.linkedin.com/in/munmun-khanra-a9092243/">LinkedIn  {"    "}  |</a></Typography>
        <Typography variant="body2" component="span"  style={ {color:"white"}}><a href="https://scholar.google.com/citations?user=5tKH7h0AAAAJ&hl=en"> {"    "}    Google Scholar</a> </Typography>
        <br />
        <br />
        <Typography variant='body2' component="p" style={{color:"white"}}> <a href="http://eie.nits.ac.in/munmun/">Academic Profile</a></Typography>
        </Box>
    </Stack>
    <Typography variant="h6" component="p"  style={ {color:"white",textJustify: "auto",textAlign: "justify",margin:"2% 0" }}> Dr. Munmun Khanra received her B. Tech. from Vidyasagar University, West Bengal. She received M.Tech degree from Jadavpur University, West Bengal and Ph.D degree from IIT Kharagpur, West Bengal. Dr. Munmun Khanra held position of Assistant Professor in Heritage Institute of Technology, Kolkata from July 2004 to Jan. 2009, after which she joined the Electronics and Instrumentation Engineering Department at NIT Silchar as an Assistant Professor in December 2014. Her research interests include Estimation and Control, Batteries and Supercapacitors, Electric Vehicle, Energy Storage, Energy management, Renewable Energy, Wearable Devices, Fractional Order Systems and Applications.</Typography>
    </>
  );
}
