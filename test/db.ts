import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoD = new MongoMemoryServer();

export const connectDB = async (): Promise<void> => {
  const uri = await mongoD.getUri();

  await mongoose.connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const closeDB = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoD.stop();
};
