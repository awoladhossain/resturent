import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://fooddb:Df6wK77elbbkzKIb@cluster0.secxzoo.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB is Connected");
    });
};

//   ***