import * as mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<Order>;
export interface Order extends mongoose.Document {
    customerName: string;
    pax: number;
    fee: number;
}
