const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // You can change this port as needed

// Middleware to parse JSON request body
app.use(bodyParser.json());

// POST endpoint for handling login requests
app.post("/login", (req, res) => {
  // Simulate authentication (replace this with your actual authentication logic)
  const { usernameOrEmail, password } = req.body;
  const isAuthenticated = simulateAuthentication(usernameOrEmail, password);

  // Respond with a JSON object indicating login status
  if (isAuthenticated) {
    res.status(200).json({ isOk: true });
  } else {
    res.status(401).json({ isOk: false, error: "Invalid credentials" });
  }
});

// Function to simulate authentication (replace this with your actual authentication logic)
function simulateAuthentication(usernameOrEmail, password) {
  // Simulate authentication logic
  // For demonstration purposes, we'll just check if the username and password are non-empty
  return usernameOrEmail && password;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
