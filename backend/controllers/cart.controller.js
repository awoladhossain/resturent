import userModel from "../models/user.model.js";

// add to cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    return res.json({ success: true, message: "Add To Cart" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error adding to cart" });
  }
};

// remove from cart

const removeFromCart = async (req, res) => {};

// fetchUser cart data

const getCart = async (req, res) => {};

export { addToCart, removeFromCart, getCart };
