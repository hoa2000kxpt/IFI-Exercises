import dbConnect from "../../../utils/dbConnect";
import Products from '../../../models/products'

dbConnect()

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const products = await Products.find({});
                res.status(200).json({ success: true, data: products })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const products = await Products.create(req.body);
                res.status(201).json({ success: true, data: products })
            } catch {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}