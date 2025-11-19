import {MouseEvent} from "react";

const items = [
  "An item",
  "A second item",
  "A third item",
  "A fourth item",
  "and a fifth item",
];

let selectedIndex = 0;

const handleClick = (event) => console.log(event.altKey)

function ListGroup() {
  return (
    <div>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
