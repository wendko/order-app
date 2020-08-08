import { Model } from 'mongoose';
import { Order } from './order.model';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    getOrder(): string;
    insertOrder(customerName: string, pax: number, fee: number): Promise<any>;
}
