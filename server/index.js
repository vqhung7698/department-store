import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/connectDb.js";
import userRouter from "./route/user.route.js";
import categoryRouter from "./route/category.route.js";
import productRouter from "./route/product.route.js";
import cartRouter from "./route/cart.route.js";
import myListRouter from "./route/myList.route.js";
import adminRouter from "./route/admin.route.js";

const app = express();
// app.use(cors());
app.use(
  cors({
    // origin: "http://localhost:5173", // cho phép chỉ front-end này truy cập
    origin: "http://localhost:5174", // cho phép chỉ front-end này truy cập
    credentials: true, // cho phép gửi cookie và credentials
  })
);
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.get("/", (request, response) => {
  response.json({
    message: "Server is running on" + process.env.PORT,
  });
});

// User route
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/myList", myListRouter);

// Admin route
app.use("/api/admin", adminRouter);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
