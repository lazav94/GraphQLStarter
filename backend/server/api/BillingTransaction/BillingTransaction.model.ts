import { Schema, Document, model } from "mongoose";

const billingTransactionSchema = new Schema({
  payment: {
    type: String,
    required: true,
  },
});

export interface IBillingTransaction extends Document {
  payment: string;
}

export default model<IBillingTransaction>(
  "BillingTransaction",
  billingTransactionSchema
);
