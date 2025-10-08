const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Category schema
const categorySchema = new mongoose.Schema({
  name: String,
  image: String
});

const Category = mongoose.model("Category", categorySchema);

// Example categories route
app.get("/api/categories", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
