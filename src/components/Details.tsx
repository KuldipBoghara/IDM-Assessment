import React, { useContext, useState, useEffect } from 'react';
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  FormHelperText,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Card
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Switch from '@mui/material/Switch';

import AssessmentContext from '../Context/AssessmentContext';

function Details() {
  const checklabel = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [suite, setSuite] = useState('');
  const [room, setRoom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [streetname, setStreetName] = useState('');
  const [streetnumber, setStreetNumber] = useState('');
  const [zip, setZip] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');
  const [checkradio, setCheckRadio] = useState('');
  const [reminder, setReminder] = useState(true);
  const [newsletter, setNewsLetter] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const [extrafacilities, setExtraFacilities] = useState<string[]>([]);
  const [arrivaldate, setArrivalDate] = React.useState<Dayjs | null>(
    dayjs('2023-01-13')
  );
  const [departuredate, setDepartureDate] = React.useState<Dayjs | null>(
    dayjs('2023-01-13')
  );

  const { selectedreservation, reservation } = useContext(AssessmentContext);

  const extras = [
    'extraBreakfast',
    'extraTV',
    'extraWifi',
    'extraParking',
    'extraBalcony'
  ];

  useEffect(() => {
    if (selectedreservation) {
      setValues();
    }
  }, []);

  const setValues = () => {
    const currentreser = reservation.filter(
      (item: any) => item.email === selectedreservation
    );
    console.log(currentreser);
    setArrivalDate(currentreser[0].stay.arrivalDate);
    setDepartureDate(currentreser[0].stay.departureDate);
    setSuite(currentreser[0].room.roomSize);
    setRoom(currentreser[0].room.roomQuantity);
    setFirstName(currentreser[0].firstName);
    setLastName(currentreser[0].lastName);
    setEmail(currentreser[0].email);
    setPhone('+' + currentreser[0].phone);
    setStreetName(currentreser[0].addressStreet.streetName);
    setStreetNumber(currentreser[0].addressStreet.streetNumber);
    setZip(currentreser[0].addressLocation.zipCode);
    setProvince(currentreser[0].addressLocation.state);
    setCity(currentreser[0].addressLocation.cityzipCode);
    setCheckRadio(currentreser[0].payment);
    setNote(currentreser[0].note);
    setReminder(currentreser[0].reminder);
    setNewsLetter(currentreser[0].newsletter);
    setConfirm(currentreser[0].confirm);
  };

  const handleExtra = (event: SelectChangeEvent<typeof extrafacilities>) => {
    const {
      target: { value }
    } = event;
    setExtraFacilities(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleArrivalDate = (newValue: Dayjs | null) => {
    setArrivalDate(newValue);
  };

  const handleDepartureDate = (newValue: Dayjs | null) => {
    setDepartureDate(newValue);
  };

  return (
    <div>
      <Card sx={{ Width: 100, marginLeft: 10, marginRight: 10 }}>
        <FormGroup>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date of Arrival"
                inputFormat="MM/DD/YYYY"
                value={arrivaldate}
                onChange={handleArrivalDate}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date of Departure"
                inputFormat="MM/DD/YYYY"
                value={departuredate}
                onChange={handleDepartureDate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    sx={{ marginLeft: 3 }}
                  />
                )}
              />
            </LocalizationProvider>
          </div>

          <div>
            <FormControl variant="standard" sx={{ width: '20%', marginTop: 2 }}>
              <InputLabel>Room Size</InputLabel>
              <Select
                onChange={(event: SelectChangeEvent) => {
                  setSuite(event.target.value);
                }}
                value={suite}
                label="Room Size"
              >
                <MenuItem value={''}></MenuItem>
                <MenuItem value={'presidential-suite'}>
                  Presidential Suite
                </MenuItem>
                <MenuItem value={'business-suite'}>Business Suite</MenuItem>
              </Select>
              <FormHelperText> Choose a Room Type</FormHelperText>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: '20%', marginLeft: '3%', marginTop: 2 }}
            >
              <InputLabel>Room Quantity</InputLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setRoom(event.target.value);
                }}
                value={room}
              />
              <FormHelperText> Maximum: 5</FormHelperText>
            </FormControl>
          </div>

          <FormControl variant="standard" sx={{ width: '20%' }}>
            <InputLabel>First Name</InputLabel>
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(event.target.value);
              }}
              value={firstname}
            />
            <FormHelperText
              sx={{ marginLeft: '85%' }}
            >{`${firstname.length}/25`}</FormHelperText>
          </FormControl>

          <FormControl variant="standard" sx={{ width: '20%' }}>
            <InputLabel>Last Name</InputLabel>
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLastName(event.target.value);
              }}
              value={lastname}
            />
            <FormHelperText
              sx={{ marginLeft: '85%' }}
            >{`${lastname.length}/50`}</FormHelperText>
          </FormControl>

          <FormControl variant="standard" sx={{ width: '20%' }}>
            <InputLabel>E-mail</InputLabel>
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </FormControl>

          <FormControl variant="standard" sx={{ width: '20%', marginTop: 2 }}>
            <InputLabel>Phone Number</InputLabel>
            <Input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPhone(event.target.value);
              }}
              value={phone}
            />
            <FormHelperText>Add your country code first</FormHelperText>
          </FormControl>

          <div>
            <FormControl
              variant="standard"
              sx={{ width: '20%', marginTop: '1%' }}
            >
              <InputLabel>Street Name</InputLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStreetName(event.target.value);
                }}
                value={streetname}
              />
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: '20%', marginLeft: '3%', marginTop: '1%' }}
            >
              <InputLabel>Street Number</InputLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setStreetNumber(event.target.value);
                }}
                value={streetnumber}
              />
            </FormControl>
          </div>

          <div>
            <FormControl
              variant="standard"
              sx={{ width: '20%', marginTop: '2%' }}
            >
              <InputLabel>ZIP</InputLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setZip(event.target.value);
                }}
                value={zip}
              />
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: '20%', marginLeft: '3%', marginTop: '2%' }}
            >
              <InputLabel>State</InputLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setProvince(event.target.value);
                }}
                value={province}
              />
              <FormHelperText>Autocomplete</FormHelperText>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: '20%', marginLeft: '3%', marginTop: '2%' }}
            >
              <InputLabel>City</InputLabel>
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCity(event.target.value);
                }}
                value={city}
              />
            </FormControl>
          </div>

          <FormControl
            variant="standard"
            sx={{ width: '20%', marginTop: '2%' }}
          >
            <InputLabel>Extras</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={extrafacilities}
              onChange={handleExtra}
              renderValue={(selected) => selected.join(', ')}
            >
              {extras.map((extra) => (
                <MenuItem key={extra} value={extra}>
                  <Checkbox checked={extrafacilities.indexOf(extra) > -1} />
                  <ListItemText primary={extra} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ marginTop: '3%' }}>
            <RadioGroup value={checkradio} row>
              <FormControlLabel
                value="cc"
                control={<Radio />}
                label="Creadit Card"
              />
              <FormControlLabel value="pp" control={<Radio />} label="PayPal" />
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel
                value="bitcoin"
                control={<Radio />}
                label="Bitcoin"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            sx={{ marginTop: '2%' }}
            id="standard-multiline-static"
            label="Personal note"
            multiline
            rows={3}
            variant="standard"
            value={note}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNote(event.target.value);
            }}
          />

          <div style={{ marginTop: 30 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={reminder}
                  onChange={() => setNewsLetter(!reminder)}
                  name="newsletter"
                />
              }
              label=" Send me a reminder"
            />
          </div>

          <div style={{ marginTop: 5 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={newsletter}
                  onChange={() => setNewsLetter(!newsletter)}
                  name="newsletter"
                />
              }
              label="Subscribe to newsletter"
            />
          </div>

          <div>
            <Checkbox
              checked={confirm}
              onChange={() => setConfirm(!confirm)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            I conform the information given above return
          </div>
        </FormGroup>
      </Card>
    </div>
  );
}

export default Details;
