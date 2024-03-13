import React from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/prosciutto.jpg",
    soldOut: false,
  },
];
function Pizza({ pizza }) {
  // if (pizza.soldOut) return null;
  return (
    <li className={`pizza ${pizza.soldOut?`sold-out`:""} `}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredients}</p>
        {/* //conditionally setting text content of element */}
        <span>{pizza.soldOut? "Sold Out":pizza.price}</span>
        {/* {!pizza.soldOut ? <p>Available</p> : <p>Sold out</p>} */}
      </div>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasLength > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine, 6 creative dished to choose from . All
            from our stone oven ,all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza, i) => (
              <Pizza pizza={pizza} key={i} />
            ))}
          </ul>
        </>
      ) : (
        <h2>No Pizza Available</h2>
      )}
    </main>
  );
}
export default Menu;
