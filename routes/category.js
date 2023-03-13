import { Router } from 'express';
const router = Router();
import * as category from '../controllers/category.js';

// Routes for /categories
router.get('/', category.getCategories);
router.post('/', category.createCategory);

// Routes for /categories/:categoryId
router.get('/:categoryId', category.getCategoryById);
router.put('/:categoryId', category.updateCategory);
router.delete('/:categoryId', category.deleteCategory);

export default router;
