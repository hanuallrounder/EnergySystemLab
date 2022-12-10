import React from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import  ImageList  from "../components/ImageList";
const Home = () => {
    return (
    <>
    <Navbar />
    <div id="about">
    <Typography variant="h4" m={4} component="h4" style={ {color:"white"}}>About The Laboratory</Typography>
    <Typography variant="h6" paragraph  style={ {color:"white",textJustify: "auto",textAlign: "justify",margin:"2% 10%" }}> 
    Energy System Lab is situated at the first floor of east block in Electronics and Instrumentation Engineering Department, NIT Silchar. The aim of this laboratory is to train post graduate, and research scholar students in the area of Energy Systems with the objective to research and study in this field.
<br />
<br />
<ImageList />
<br />
Currently the lab is engaged in the two different projects: one is Development of battery supercapacitor hybrid energy storage for standalone solar photovoltaic power systems and the second one is Development of Health Diagnostic Framework for Onboard Electric Vehicle Batteries and Repurposing of Retired Batteries.
<br />
<br />
We work for the betterment of society by providing alternate sustainable technology for the efficient & balanced Energy Systems.
    </Typography>
    </div>
    </> 
    );
};

export default Home;
