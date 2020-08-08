import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
    getTransactionStatus(orderId: string) {
        return {
            orderId,
            successful: Number(new Date()) % 3 === 0
        };
    }
}
