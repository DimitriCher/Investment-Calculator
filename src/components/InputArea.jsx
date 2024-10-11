export default function InputArea({ children }) {
  return (
    <>
      <label id="user-input label">{children}</label>
      <input id="user-input input"></input>
    </>
  );
}
