import mongoose from "mongoose";
import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;

export const FavoriteSchema = new Schema({
    accountId: {type: ObjectId, required: true},
}