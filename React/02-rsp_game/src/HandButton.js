import HandIcon from "./handIcon";

function HandButton({ onClick, value }) {
  return (
    <button onClick={onClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
