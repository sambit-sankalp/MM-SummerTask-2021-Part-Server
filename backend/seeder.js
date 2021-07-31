import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import articles from "./data/articles.js";
import User from "./models/userModel.js";
import Article from "./models/articlemodel.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Article.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleArticles = articles.map((article) => {
      return { ...article, user: adminUser };
    });

    await Article.insertMany(sampleArticles);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Article.deleteMany();

    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else importData();
