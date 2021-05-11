import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db.collection('movies').findOne({});

  res.json(movies);
};
