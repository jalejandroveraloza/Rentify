const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const userRouter = require("./routes/user.route.js");
const PORT = 8000;
const morgan = require('morgan');


//middleware

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// const usersRoutes = require("./routes/users");
// const productRoutes = require("./routes/product");
// const favouritesRoutes = require("./routes/favourites");
// const searchRoutes = require("./routes/search");
// const addListingRoutes = require("./routes/addProduct");

// app.use("/api/users", usersRoutes(pool));
// app.use("/products", productRoutes(pool));
// app.use("/favourites", favouritesRoutes(pool));
// app.use("/", searchRoutes(pool));
// app.use("/", addListingRoutes(pool));

app.use("/api/user", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
