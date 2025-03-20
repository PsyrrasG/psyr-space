require("dotenv").config(); // Load environment variables from .env file

const express = require('express');
const path = require('path');
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const compression = require("compression");
const helmet = require("helmet")

const app = express();

NODE_ENV = process.env.NODE_ENV

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression()); // compress all routes
// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and jQuery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

// app.use(cors()); // allow all origins (not secure)
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow cookies and credentials (if needed)
  })
);

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

// Routes:
app.use("/api", contactRoutes)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});