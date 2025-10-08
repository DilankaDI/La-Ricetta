const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.log(err));

// Category schema
const categorySchema = new mongoose.Schema({
  name: String,
  image: String
});

const Category = mongoose.model("Category", categorySchema);

// Seed data
const categories = [
  {
    name: "Fast Foods",
    image: "/assets/fast-food.jpg"
  },
  {
    name: "Street Foods",
    image: "/assets/street-food.jpg"
  },
  {
    name: "Desserts",
    image: "/assets/dessert.jpg"
  }
];


// Seed function
const seedDB = async () => {
  await Category.deleteMany({});  // clear existing categories
  await Category.insertMany(categories);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
