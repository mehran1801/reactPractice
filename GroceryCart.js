import React, { useState } from "react";

const produce = [
  "Carrots",
  "Cucumbers",
  "Bell peppers",
  "Avocados",
  "Spinach",
  "Kale",
  "Tomatoes",
  "Bananas",
  "Lemons",
  "Ginger",
  "Onions",
  "Potatoes",
  "Sweet potatoes",
  "Purple cabbage",
  "Broccoli",
  "Mushrooms",
  "Cilantro",
];

const pantryItems = [
  "Chia",
  "Goji berries",
  "Peanut butter",
  "Bread",
  "Cashews",
  "Pumpkin seeds",
  "Peanuts",
  "Olive oil",
  "Sesame oil",
  "Tamari",
  "Pinto beans",
  "Black beans",
  "Coffee",
  "Rice",
  "Dates",
  "Quinoa",
];

export function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  return (
    <div>
      {items.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

export function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul style={{ backgroundColor: "#edf6f9" }}>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}


// My Version

// export function SandBox() {
//   const [cart, setCart] = useState([]);

//   const addItem = ({ target }) => {
//     const clickedItem = target.value;
//     setCart((prev) => {
//       return [clickedItem, ...prev];
//     });
//   };
//   const removeItem = (targetIndex) => {
//     setCart((prev) => {
//       return prev.filter((_, i) => i !== targetIndex);
//     });
//   };

//   return (
//     <div>
//       <h2>Grocery Cart</h2>
//       <ul style={{ backgroundColor: "#edf6f0" }}>
//         {cart.map((item, index) => (
//           <li
//             style={{ backgroundColor: "#edf6ce" }}
//             value={item}
//             key={index}
//             //   onClick={removeItem(index)}
//             onClick={() => removeItem(index)}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//       {/* Produce */}
//       <h3>Produce</h3>
//       {produce.map((item) => {
//         return (
//           <button value={item} onClick={addItem}>
//             {/* onClick={() => addItem()} */}

//             {item}
//           </button>
//         );
//       })}

//       {/* Pantry Items */}
//       <h3>Pantry Items</h3>
//       {pantryItems.map((item) => (
//         <button value={item} onClick={addItem}>
//           {item}
//         </button>
//       ))}
//       {console.log(cart)}
//     </div>
//   );
// }