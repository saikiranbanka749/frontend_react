import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import empDetails from "../db/EmpDetails.json";
import { Typography } from '@mui/material';

const DisplayTable =()=> {
  console.log(empDetails)
  return (
    <div style={{position :"relative", top:"50px"}}>
    {/* <Typography textAlign="center" variant='h4'>Employee details</Typography> */}
     <TableContainer style={{width:"100%"}} component={Paper}>

    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Id</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Contact</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {empDetails.empDetails?.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {/* <TableCell component="th" scope="row">
              {row.name}
            </TableCell> */}
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.contact}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  );
}
export default DisplayTable;