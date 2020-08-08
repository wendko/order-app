import { Controller, Post, Body } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller('transaction')
export class PaymentController {

    constructor(private paymentService: PaymentService) { }

    @Post()
    getTransactionStatus(
        @Body('orderId') orderId: string
    ) {
        return this.paymentService.getTransactionStatus(orderId);
    }
}