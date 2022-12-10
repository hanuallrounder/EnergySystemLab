import React, {useEffect} from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import EquipmentCard from "../components/EquipmentCard";


import equipmentData from "../assets/Data/equipments.js"

import "../assets/css/equipmentsList.css"
const LlistOfEquipments = () => {
    const container = React.useRef(null);
    const scrollToBottom = () => {
      container.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, []);
    return (
    <div >
    <Navbar />
    <div ref={container}></div>
    <Typography variant="h4" m={4} component="h4" style={ {color:"white"}}>List of Equipments</Typography>
    <div className="container" >
    {equipmentData.map((item,i) =>  <div key={i}> <EquipmentCard item={item} /></div>)}
    </div>
    
    </ div> 
    );
};

export default LlistOfEquipments;
