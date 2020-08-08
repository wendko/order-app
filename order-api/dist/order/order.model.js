"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    pax: { type: Number, required: true },
    fee: { type: Number, required: true }
});
//# sourceMappingURL=order.model.js.map