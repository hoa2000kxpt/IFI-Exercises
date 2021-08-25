import dbConnect from "../../../utils/dbConnect";
import Products from '../../../models/products'

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const products = await Products.findById(id);
                if (!products ) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: products });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        case 'PUT':
            try {
                const products = await Products.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!products) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: products });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;

        case 'DELETE':
            try {
                const deletedProduct = await Products.deleteOne({ _id: id });

                if (!deletedProduct) {
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