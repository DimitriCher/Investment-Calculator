import { useState } from 'react';

import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIndentifier]: +newValue };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Duration has to be greater than zero</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
