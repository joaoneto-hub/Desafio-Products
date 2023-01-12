import { Request, Response } from 'express';
import Product from '../models/Product';

class ProductController{
    public async index(Request: Request, Response: Response){
        const Products = await Product.find();
        return Response.status(201).json(Products);
    }

    public async store(Request: Request, Response: Response){
        const { name, category, quantity } = Request.body;

        if(!name){
            return Response.status(402).json({
                message: 'Name is required'
            });
        }

        if(!category){
            return Response.status(402).json({
                message: 'Category is required'
            });
        }
        if(!quantity){
            return Response.status(402).json({
                message: 'Quantity is required'
            });
        }

        const product = new Product({
            name,
            category,
            quantity,
            createdAt: Date.now()
        });

        try {

            await product.save();

            return Response.status(201).json({
                message: 'Product created successfully'
            });

        }catch(error){
            return Response.status(500).json({message: 'Server error please try later'});
        }
    }
    public async update(Request: Request, Response: Response){
        const _id  = Request.params.id;
        const { name, category, quantity, status } = Request.body;

        if(!name){
            return Response.status(402).json({
                message: 'Name is required'
            });
        }

        if(!category){
            return Response.status(402).json({
                message: 'Category is required'
            });
        }
        if(!quantity){
            return Response.status(402).json({
                message: 'Quantity is required'
            });
        }


        if (!['ACTIVE', 'INACTIVE'].includes(status)) {
            return Response.status(400).json({
                error: 'Invalid Status. Valid Status: ACTIVE, INACTIVE'
            });
        }

        const product = {
            name,
            category,
            quantity,
            updated_at: Date.now(),
            status
        };

        try {

            await Product.findByIdAndUpdate({_id}, product );

            Response.status(204).json({message: 'Product updated successfully'});

        }catch(error){
            return Response.status(500).json({message: 'Server error please try later'});
        }

    }
    public async delete(Request: Request, Response: Response){
        const _id  = Request.params.id;

        try {

            await Product.findByIdAndDelete({_id});

            return Response.status(201).json({
                message: 'Product deleted successfully'
            });

        }catch(error){
            return Response.status(500).json({message: 'Server error please try later'});
        }
    }
}

export default new ProductController;
