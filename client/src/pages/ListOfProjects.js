
import Navbar from "../components/Navbar"
import  React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(name, Sponsoring, Investigators, Duration,Amount) {
  return {name, Sponsoring, Investigators, Duration,Amount};
}

const rows = [
  createData('Development of battery supercapacitor hybrid energy storage for standalone solar photovoltaic power systems.',"DST","PI- Dr. Munmun Khanra","2016-2021","23.324"),
  createData("Development of Health Diagnostic Framework for Onboard Electric Vehicle Batteries and Repurposing of Retired Batteries","SERB","PI- Dr. Munmun Khanra","2022-2025","22"),
  createData()
];

export default function ListOfProjects() {
  const container = React.useRef(null);
    const scrollToBottom = () => {
      container.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, []);
  return (
    <div >
    <Navbar />
    <div ref={container}></div>
    <div style={{height:'100vh', margin:" 0 10%"}} >
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name of the Project</StyledTableCell>
            <StyledTableCell >Sponsoring Agency</StyledTableCell>
            <StyledTableCell >Investigators</StyledTableCell>
            <StyledTableCell >Duration</StyledTableCell>
            <StyledTableCell >Amount Sanctioned (in lakhs)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.Sponsoring}</StyledTableCell>
              <StyledTableCell >{row.Investigators}</StyledTableCell>
              <StyledTableCell >{row.Duration}</StyledTableCell>
              <StyledTableCell >{row.Amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
