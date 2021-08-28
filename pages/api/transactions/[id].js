import dbConnect from "../../../utils/dbConnect";
import Transactions from '../../../models/transactions'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const transactions = await Transactions.findById(id);
                if (!transactions) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: transactions });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        case 'PUT':
            try {
                const transactions = await Transactions.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!transactions) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: transactions });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        case 'DELETE':
            try {
                const deletedTransaction = await Transactions.deleteOne({ _id: id });

                if (!deletedTransaction) {
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