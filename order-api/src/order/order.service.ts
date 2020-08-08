import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.model';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) { }

    async getOneOrder(id: string) {
        const order = this.orderModel.findById(id);
        return order;
    }

    async getAllOrders() {
        const orders = await this.orderModel.find();
        return orders;
    }

    async insertOrder(customerName: string, pax: number, fee: number) {
        const newOrder = new this.orderModel({ customerName, pax, fee });
        const result = await newOrder.save();
        return result.id;
    }
}
