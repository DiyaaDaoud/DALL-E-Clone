import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
const connectDB = (url) => {
  //   const client = new MongoClient(url, {
  //     serverApi: {
  //       version: ServerApiVersion.v1,
  //       strict: true,
  //       deprecationErrors: true,
  //     },
  //   });
  //   client
  //     .connect()
  //     .then(() => console.log("Mongo DB connected"))
  //     .catch((e) => console.log(e));
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, { connectTimeoutMS: 100000 })
    .then(() => console.log("Mongo DB connected"))
    .catch((e) => console.log(e));
};
export default connectDB;
