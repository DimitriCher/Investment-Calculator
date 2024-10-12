export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label id="user-input label">Initial Investment</label>
          <input
            id="user-input input"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          ></input>
        </p>
        <p>
          <label id="user-input label">Annual Investment</label>
          <input
            id="user-input input"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
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
            value={userInput.expectedReturn}
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          ></input>
        </p>
        <p>
          <label id="user-input label">Duration</label>
          <input
            id="user-input input"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange('duration', e.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
