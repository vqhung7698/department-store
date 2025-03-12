import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: [
      {
        type: String,
        require: true,
      },
    ],
    brand: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    catName: {
      type: String,
      default: "",
    },
    catId: {
      type: String,
      default: "",
    },
    subCatId: {
      type: String,
      default: "",
    },
    subCatName: {
      type: String,
      default: "",
    },
    thirdSubCat: {
      type: String,
      default: "",
    },
    thirdSubCatId: {
      type: String,
      default: "",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    countInStock: {
      type: Number,
      // default: 0,
      require: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      require: true,
    },
    size: [
      {
        type: String,
        default: null,
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
