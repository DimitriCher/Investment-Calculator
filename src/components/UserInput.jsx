export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label id="user-input label">Initial Investment</label>
          <input id="user-input input" type="number" required></input>
        </p>
        <p>
          <label id="user-input label">Annual Investment</label>
          <input id="user-input input" type="number" required></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="user-input label">Expected Return</label>
          <input id="user-input input" type="number" required></input>
        </p>
        <p>
          <label id="user-input label">Duration</label>
          <input id="user-input input" type="number" required></input>
        </p>
      </div>
    </section>
  );
}
