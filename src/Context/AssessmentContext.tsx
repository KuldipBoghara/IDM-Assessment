import { createContext, useEffect, useState } from 'react';

type AssessmentProviderProps = {
  children: React.ReactNode;
};

const AssessmentContext = createContext<any | null>(null);

export const AssessmentProvider = ({ children }: AssessmentProviderProps) => {
  const [reservation, setReservation] = useState<any[]>([]);
  const [searchid, setSearchID] = useState<any>();
  const [selectedreservation, setSelectedReservation] = useState<string>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchReservation();
  }, []);

  //Fetch all data
  const fetchReservation = async () => {
    const response = await fetch(`http://localhost:5000/reservations`);

    const data = await response.json();

    setReservation(data);
  };

  //Search Data
  const searchReservation = () => {
    searchid &&
      setReservation(reservation.filter((item) => item.email === searchid));
  };

  //For PopDialog Box

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <AssessmentContext.Provider
      value={{
        reservation,
        setSearchID,
        searchReservation,
        fetchReservation,
        selectedreservation,
        setSelectedReservation,
        handleClickOpen,
        setOpen,
        open
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentContext;
