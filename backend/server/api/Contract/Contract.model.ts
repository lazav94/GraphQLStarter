import { Schema, Document, model } from "mongoose";

const contractSchema = new Schema({
  state: {
    type: String, // SET TO ENUM
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  billingTransaction: {
    type: Schema.Types.ObjectId,
    ref: "BillingTransaction",
  },
});

export interface IContract extends Document {
  _id: string;
  state: string;
  user: string;
  billingTransaction: string;
}

export default model<IContract>("Contract", contractSchema);
