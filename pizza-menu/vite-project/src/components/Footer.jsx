import React from "react";
let Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 8;
  const closeHour = 24;
  const isOpen = hour <= closeHour && hour >= openHour;
  console.log(isOpen);
//   if (!isOpen) return <footer>CLOSED</footer>;
  return (
    <div className="footer">
      {/* {isOpen?<footer>We are currently open</footer>:<footer>We are currently closed</footer>} */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <footer>
          We are currently closed.Please come between {openHour}:00am-
          {closeHour}:00pm{" "}
        </footer>
      )}
    </div>
  );
};
let Order = ({closeHour}) => {
    // const closeHour = 22;
  return (
    <div className="order">
      <footer>
        We are currently open untill {closeHour}. Come visit us or order online
      </footer>
      <button className="btn">Order now</button>
    </div>
  );
};
export default Footer;
