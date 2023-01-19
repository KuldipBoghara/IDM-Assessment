import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AssessmentContext from '../Context/AssessmentContext';
import PopDialog from './PopDialog';

function ViewData() {
  const { reservation, setSelectedReservation, handleClickOpen } =
    useContext(AssessmentContext);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '20%' }}>First Name</TableCell>
            <TableCell style={{ width: '20%' }}>Last Name</TableCell>
            <TableCell style={{ width: '30%' }}>Email</TableCell>
            <TableCell style={{ width: '30%' }}>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservation.map((row: any, index: any) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onDoubleClick={() => {
                setSelectedReservation(row.email);
                handleClickOpen();
              }}
            >
              <TableCell component="th" scope="row" style={{ width: '20%' }}>
                {row.firstName}
              </TableCell>
              <TableCell style={{ width: '20%' }}>{row.lastName}</TableCell>
              <TableCell style={{ width: '30%' }}>{row.email}</TableCell>
              <TableCell style={{ width: '30%' }}>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Popup Dialog for reservation */}
      <PopDialog />
    </TableContainer>
  );
}

export default ViewData;
