import { Router } from 'express';
const router = Router();
import * as categoryControllers from '../controllers/categoryController.js';

// Routes for /categories
router.get('/', categoryControllers.getCategories);
router.post('/', categoryControllers.createCategory);

// Routes for /categories/:categoryId
router.get('/:categoryId', categoryControllers.getCategoryById);
router.put('/:categoryId', categoryControllers.updateCategory);
router.delete('/:categoryId', categoryControllers.deleteCategory);

export default router;
