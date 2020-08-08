import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrder(): string;
    createNewOrder(customerName: string, pax: number, fee: number): Promise<any>;
}
