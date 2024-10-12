import { useState } from 'react';

export default function UserInput() {
  const [UserInput, setUserInput] = useState({
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label id="user-input label">Initial Investment</label>
          <input
            id="user-input input"
            type="number"
            required
            value={UserInput.initialInvestment}
            onChange={(e) => handleChange('initialInvestment', e.target.value)}
          ></input>
        </p>
        <p>
          <label id="user-input label">Annual Investment</label>
          <input
            id="user-input input"
            type="number"
            required
            value={UserInput.annualInvestment}
            onChange={(e) => handleChange('annualInvestment', e.target.value)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="user-input label">Expected Return</label>
          <input
            id="user-input input"
            type="number"
            required
            value={UserInput.expectedReturn}
            onChange={(e) => handleChange('expectedReturn', e.target.value)}
          ></input>
        </p>
        <p>
          <label id="user-input label">Duration</label>
          <input
            id="user-input input"
            type="number"
            required
            value={UserInput.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
