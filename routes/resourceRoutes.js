import express from 'express';
import * as resourceControllers from '../controllers/resourceController.js';

const router = express.Router();

// Routes for /resources
router.get('/', resourceControllers.getResources);
router.post('/', resourceControllers.createResource);

// Routes for /resources/:resourceId
router.get('/:resourceId', resourceControllers.getResourceById);
router.put('/:resourceId', resourceControllers.updateResource);
router.delete('/:resourceId', resourceControllers.deleteResource);

export default router;