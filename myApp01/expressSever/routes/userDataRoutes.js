const express = require("express");
const router = express.Router();
const { fetchUserData } = require("../services/UserDataService");

// Route to handle user login
router.post("/login", async (req, res) => {
  try {
    // Access the posted data from Angular
    const postData = req.body;

    // Process the data or perform database operations
    // For demonstration, let's just log the data
    console.log("Received data from Angular:", postData);

    // Fetch user data
    const userData = await fetchUserData();

    // Send a response back to Angular
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error processing login request:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
