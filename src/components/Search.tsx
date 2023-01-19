import React, { useContext } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Stack
} from '@mui/material';

import AssessmentContext from '../Context/AssessmentContext';

function Search() {
  const { setSearchID, searchReservation, fetchReservation } =
    useContext(AssessmentContext);

  const onClick = (e: any) => {
    searchReservation();
  };

  const showAll = (e: any) => {
    fetchReservation();
  };

  return (
    <div>
      <FormGroup>
        <div>
          <FormControl variant="standard" sx={{ width: '20%', marginLeft: 3 }}>
            <InputLabel>E-mail</InputLabel>
            <Input onChange={(e) => setSearchID(e.target.value)} />
            <FormHelperText>
              Enter Email ID to search Reservation
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Stack direction="row" sx={{ marginTop: 1.5, marginLeft: 3 }}>
              <Button variant="contained" onClick={onClick}>
                Search
              </Button>
            </Stack>
          </FormControl>

          <FormControl>
            <Stack direction="row" sx={{ marginTop: 1.5, marginLeft: 3 }}>
              <Button variant="contained" onClick={showAll}>
                Show All
              </Button>
            </Stack>
          </FormControl>
        </div>
      </FormGroup>
    </div>
  );
}

export default Search;
