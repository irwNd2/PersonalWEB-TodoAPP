import mongoose from "mongoose";

const { MONGODB_URI } = process.env;
if (!MONGODB_URI) throw new Error("MONGODB_URI not defined");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

const dbConnect = async () => {
  console.log(MONGODB_URI);
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    console.log(cached);
    cached.promise = mongoose.connect(`${MONGODB_URI}`, { bufferCommands: false }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
