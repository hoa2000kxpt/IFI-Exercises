import dbConnect from "../../../utils/dbConnect";
import Transactions from '../../../models/transactions'

dbConnect()

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const transactions= await Transactions.find({});
                res.status(200).json({ success: true, data: transactions })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const transactions = await Transactions.create(req.body);
                res.status(201).json({ success: true, data: transactions })
            } catch {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}