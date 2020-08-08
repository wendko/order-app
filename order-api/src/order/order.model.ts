import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema<Order>({
    customerName: { type: String, required: true },
    pax: { type: Number, required: true },
    fee: { type: Number, required: true }
})

export interface Order extends mongoose.Document {
    customerName: string;
    pax: number;
    fee: number;
}