import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get()
    async getAllOrders() {
        const orders = await this.orderService.getAllOrders();
        return orders;
    }

    @Get(':id')
    async getOneOrder(@Param('id') id: string) {
        const orders = await this.orderService.getOneOrder(id);
        return orders;
    }

    @Post()
    async createNewOrder(
        @Body('customerName') customerName: string,
        @Body('pax') pax: number,
        @Body('fee') fee: number,
    ) {
        const id = await this.orderService.insertOrder(customerName, pax, fee);
        return id;
    }
}
