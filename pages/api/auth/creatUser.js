import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";


async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }

    const data = req.body;

    const { id, email, password, username, fullname, phoneNumber, gender, dob, status, role } = data;

    if (
        !id ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 6 ||
        !fullname ||
        !phoneNumber ||
        !gender ||
        !dob ||
        !status ||
        !role
    ) {
        res.status(422).json({
            message:
                'Invalid input - password should also be at least 6 characters long.',
        });
        return;
    }

    const client = await connectToDatabase();

    const db = client.db('accounts');

    const existingUser = await db.collection('users').findOne({ email: email });

    if (existingUser) {
        res.status(422).json({ message: 'User exists already!' });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
        id: id,
        email: email,
        password: hashedPassword,
        username: username,
        fullname: fullname,
        phoneNumber: phoneNumber,
        gender: gender,
        dob: dob,
        status: status,
        role: role
    });

    res.status(201).json({ message: "Created User!" })
    client.close()
}



export default handler;