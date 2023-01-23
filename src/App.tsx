import React from 'react';
import HomeScreen from './components/HomeScreen';
import Details from './components/Details';
import { AssessmentProvider } from './Context/AssessmentContext';

function App() {
  return (
    <AssessmentProvider>
      {/*  <HomeScreen /> */}
      <Details />
    </AssessmentProvider>
  );
}

export default App;
