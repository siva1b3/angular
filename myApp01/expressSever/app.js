const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userDataRoutes = require("./routes/userDataRoutes");
const countryRoutes = require("./routes/countryRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Mount user data routes
app.use("/api/user", userDataRoutes);

// Mount country routes
app.use("/api/country", countryRoutes);

// Mount authentication routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
