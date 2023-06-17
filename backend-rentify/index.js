const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/users.js");
const productRouter = require("./routes/products.js");
const categoryRouter = require("./routes/categories.js");
const orderRouter = require("./routes/orders.js");
const PORT = 8000;
const morgan = require("morgan");
const pool = require("./db.js");

//middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/user", userRouter(pool));
app.use("/api/product", productRouter(pool));
app.use("/api/category", categoryRouter(pool));
app.use("/api/order", orderRouter(pool));



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
