import dbConnect from "../../../utils/dbConnect";
// import { hashPassword } from "../../../lib/auth;"


async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }

    const data = req.body;

    const { email, password, fullname, phoneNumber, gender, dob, status, role } = data;

    if (
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 7 ||
        !fullname ||
        !phoneNumber ||
        !gender ||
        !dob ||
        !status ||
        !role
    ) {
        res.status(422).json({
            message:
                'Invalid input - password should also be at least 7 characters long.',
        });
        return;
    }

    const client = await dbConnect();

    const db = client.db();

    const hashedPassword = hashPassword(password);

    const result = db.collection('users').insertOne({
        email: email,
        password: hashedPassword,
        fullname: fullname,
        phoneNumber: phoneNumber,
        gender: gender,
        dob: dob,
        status: status,
        role: role
    });

    res.status(201).json({ message: "Created User!" })
}

// export async function getAllUsers() {
//     const { db } = await dbConnect();
//     const users = await db
//         .collection("users")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(1000)
//         .toArray();
//     return {
//         props: {
//             users: JSON.parse(JSON.stringify(users)),
//         },
//     };
// }


export default handler;