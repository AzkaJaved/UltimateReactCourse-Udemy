import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <TravelList />
      <Stats />
    </div>
  );
}
export default App;
function Logo() {
  return (
    <div>
      <h1>🌴 Far Away 👜</h1>
    </div>
  );
}
function Form() {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  let handleAdd = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(0);
    // initialItems.push(newItem);
    // console.log(initialItems);
  };
  return (
    <form className="add-form" onSubmit={handleAdd}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        name="quantity"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="item-description"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function Item({ item }) {
  return (
    <li>
      {item.quantity}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function TravelList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <div className="stats">
      <footer>You have X items in list </footer>
    </div>
  );
}

// let handleAdd = (e) => {
//   e.preventDefault();
//   console.log(e.target());
//   // let formData = new formData();
//   // formData(e.target);
//   // let description = formData.get("item-description");
//   // let quantity = formData.get("quantity");
//   // console.log(description, quantity);
// };
