import { useState } from 'react';
import UserInput from './components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIndentifier]: newValue };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
    </>
  );
}

export default App;
