import React, {useEffect} from "react";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Navbar from "../components/Navbar"
import TeamCard  from "../components/TeamCard";
import HeadProfile from "../components/HeadProfile";

import developersData from "../assets/Data/developersData.js"

function createData(name, Status, Thesis) {
    return {name, Status, Thesis};
  }
  
  const rows = [
    createData('Pankaj Saha',"Completed","	Modeling and Estimation of Supercapacitors"),
    createData("Praveen Kumar Nambinan T. M","Thesis Submitted","Optimal Energy Management of Battery and Supercapacitors storage based system"),
    createData('Sakshi Bansal','Thesis Submitted','Sizing of Energy storage System in Electric vehicles'),
    createData('Suparna Maity','Ongoing','Modelling and Estimation of supercapacitors using Fractional Calculus'),
    createData('Al Saheba Razina Akthara Choudhnry','	Ongoing','Modelling and Estimation of Lithium ion capacitor'),
    createData('	Jayabrata Maity','Ongoing','To be finalized'),


    createData()

  ];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Team = () => {
  const container = React.useRef(null);
    const scrollToBottom = () => {
      container.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, []);
    return (
    <div>
    <Navbar />
    <div ref={container}></div>
    <Typography variant="h4" component="h5" m={4} style={ {color:"white"}}> 
    Laboratory Team </Typography>
    <div style={{margin:" 5% 10%"}}>
    <Typography variant="h6" component="h6" style={ {color:"white", marginBottom:"2%",}}> 
    Faculty Incharge </Typography>
    <HeadProfile />
{/* PHD Table */}
<Typography variant="h6" component="h6" style={ {color:"white", marginBottom:"2%",}}> 
    Ph.D Scholars </Typography>
<TableContainer component={Paper} >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name of the Scholar</StyledTableCell>
            <StyledTableCell >	Status</StyledTableCell>
            <StyledTableCell >Thesis Title</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell >
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.Status}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.Thesis}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<br />
<br />
 {/* Developers */}
<Typography variant="h6" component="h6" style={ {color:"white", marginBottom:"2%",}}> 
Developers </Typography>
    
    
    <Stack
  direction={{ xs: 'column', sm: 'row' }}
  justifyContent="space-evenly"
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
    {developersData.map((data,i) =>  <div key={i}> <TeamCard data={data} /></div>)}
    </Stack>
    </div>
    </div> 
    );
};

export default Team;
