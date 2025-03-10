import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    avatar: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: null,
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login_data: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      enum: ["Hoạt động", "Không hoạt động"],
      default: "Hoạt động",
    },
    address_details: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "address",
      },
    ],
    shopping_cart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "cartProduct",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "order",
      },
    ],
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

export default UserModel;

