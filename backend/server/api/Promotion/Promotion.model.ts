import { Schema, Document, model } from "mongoose";

const PromotionSchema = new Schema({});

export interface IPromotion extends Document {}

export default model<IPromotion>("Promotion", PromotionSchema);

