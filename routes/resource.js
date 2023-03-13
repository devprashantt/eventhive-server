import express from 'express';
import * as resource from '../controllers/resource.js';

const router = express.Router();

// Routes for /resources
router.get('/', resource.getResources);
router.post('/', resource.createResource);

// Routes for /resources/:resourceId
router.get('/:resourceId', resource.getResourceById);
router.put('/:resourceId', resource.updateResource);
router.delete('/:resourceId', resource.deleteResource);

export default router;