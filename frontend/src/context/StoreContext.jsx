/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from "../assets/food del assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  // Load cart items from local storage
  // const loadCartItems = () => {
  //   const storedCartItems = localStorage.getItem("cartItems");
  //   if (storedCartItems) {
  //     console.log("Loaded cart items from local storage:", storedCartItems);
  //     return JSON.parse(storedCartItems);
  //   }
  //   return {};
  // };

  // Save cart items to local storage
  // const saveCartItems = (cartItems) => {
  //   console.log("Saving cart items to local storage:", cartItems);
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    // saveCartItems(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // saveCartItems(cartItems);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      // cartItems is an object so i have used the for in loop here
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
