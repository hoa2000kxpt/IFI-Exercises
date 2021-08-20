import dbConnect from "../../../utils/dbConnect";
import Users from '../../../models/users'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await Users.findById(id);
                if (!users) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: users });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        case 'PUT':
            try {
                const users = await Users.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!users) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: users });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        case 'DELETE':
            try {
                const deletedUser = await Users.deleteOne({ _id: id });

                if (!deletedUser) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        default:
            return res.status(400).json({ success: false });
            break;
    }
}