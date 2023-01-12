import { Schema, model } from 'mongoose';

const Product = model(
    'Product',
    new Schema({
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE'],
            default: 'ACTIVE',
        },
        createdAt: {
            type: Date,
        },
        updated_at: {
            type: Date,
        },
        deleted_at: {
            type: Date,
        },
    })
);

export default Product;
