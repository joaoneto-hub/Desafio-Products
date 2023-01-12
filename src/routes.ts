import {  Router } from 'express';


import ProductController from './controllers/ProductController';

export const router = Router();

//List Products
router.get('/Products', ProductController.index);
router.post('/Product/create', ProductController.store);
router.put('/Product/:id', ProductController.update);
router.delete('/Product/:id', ProductController.delete);

