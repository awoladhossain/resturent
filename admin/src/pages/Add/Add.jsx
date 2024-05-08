import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";

const Add = () => {
  const [image, setImage] = useState(false);

  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input type="text" name="name" placeholder="Type Here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write-content-here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category </p>
            <select name="category">
              <option value="salad ">Salad</option>
              <option value="rolls">Rolls </option>
              <option value="desert">Desert </option>
              <option value="sandwich ">Sandwich </option>
              <option value="pure veg">Pure Veg </option>
              <option value="pasta">Pasta</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price </p>
            <input type="number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};
export default Add;
