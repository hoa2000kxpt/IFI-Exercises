import { connectToDatabase } from "../../../../lib/db";

export default async function handler(req, res) {
  const client = await connectToDatabase();

  const db = client.db('accounts');

  const { email } = req.query;

  const result = await db.collection('users').findOne({ email: email });

  if (result) {
    res.status(201).json({ message: "Duplicate Email!" })
  } else {
    res.status(400).json({})
  }

  client.close()
}