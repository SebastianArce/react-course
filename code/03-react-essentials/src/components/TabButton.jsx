export default function TabButton(props) {
  let className = "";
  if (props.isSelected) {
    className = "active";
  }
  return (
    <li>
      <button className={className} onClick={props.onSelect}>
        {props.children}
      </button>
    </li>
  );
}
