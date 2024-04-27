/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/food del assets/frontend_assets/assets";
import "./FoodItem.css";

const FoodItem = ({ id, name, description, price, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div id={id} className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
export default FoodItem;
