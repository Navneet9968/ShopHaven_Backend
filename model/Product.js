const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [1, "Price must be at least 1"],
    max: [10000, "Price must be at most 10000"],
  },
  discountPercentage: {
    type: Number,
    min: [1, "Discount must be at least 0"],
    max: [100, "Discount must be at most 100"],
  },
  rating: {
    type: Number,
    min: [0, "Rating must be at least 0"],
    max: [5, "Rating must be at most 5"],
    default: 0,
  },
  stock: { type: Number, min: [0, "Stock must be at least 0"], default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
});

const virtual = productSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", productSchema);
