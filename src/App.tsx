import React from 'react';
import HomeScreen from './components/HomeScreen';
import { AssessmentProvider } from './Context/AssessmentContext';

function App() {
  return (
    <AssessmentProvider>
      <HomeScreen />
    </AssessmentProvider>
  );
}

export default App;
