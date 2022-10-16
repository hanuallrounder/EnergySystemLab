import React, {useEffect, useRef} from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import EquipmentCard from "../components/EquipmentCard";
import Copyright  from "../components/Copyright";

import equipmentData from "../assets/Data/equipments.js"

import "../assets/css/equipmentsList.css"
const LlistOfEquipments = () => {
    const container = React.useRef(null);
    const scrollToBottom = () => {
      container.current.scrollIntoView({ behavior: "smooth" })
    }
  
    React.useEffect(scrollToBottom, []);
    return (
    <div ref={container}>
    <Navbar />
    <Typography variant="h4" m={4} component="h4" style={ {color:"white"}}>List of Equipments</Typography>
    <div className="container">
    {equipmentData.map((item,i) =>  <div key={i}> <EquipmentCard /></div>)}
    </div>
    </ div> 
    );
};

export default LlistOfEquipments;
