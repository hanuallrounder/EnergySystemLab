import {Box,Typography,Stack} from '@mui/material';
import React,{useEffect} from "react";
import Navbar from "../components/Navbar"
const Contact = () => {
    const container = React.useRef(null);
    const scrollToBottom = () => {
      container.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, []);
    return (
    <>
    <Navbar />
    <div ref={container}></div>
    <Typography variant="h4" component="h5"  style={ {color:"white" , margin:'5% 10%  0 10%'}}> 
    Contact Details </Typography>
    <Box component="div" sx={{ p: 4, border: '1px solid grey', margin:"5rem 0"}}>
    <Stack
  direction={{ xs: 'column', sm: 'row' }}
  justifyContent="space-evenly"
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
        <img src={'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=5tKH7h0AAAAJ&citpid=1'} alt={"contact"} style={{height:"400px",width:"300px"}}/>
        
        <Box component="span" sx={{ p: 1,  height:"430px" }}>
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
        <Typography variant="body1" component="p"  style={ {color:"white"}}> Address:</Typography>
        <Typography variant="body2" component="p"  style={ {color:"white"}}>
            Department of EIE</Typography>
            <Typography variant="body2" component="p"  style={ {color:"white"}}> New Academic Building</Typography>
            <Typography variant="body2" component="p"  style={ {color:"white"}}> Behind Central Library</Typography>
            <Typography variant="body2" component="p"  style={ {color:"white"}}>NIT Silchar,</Typography>
            <Typography variant="body2" component="p"  style={ {color:"white"}}>Silchar,Assam-788010, India.</Typography>
        </Box>
    </Stack>
    </Box>
    
    </> 
    );
};

export default Contact;
