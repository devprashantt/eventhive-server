import { Router } from 'express';
const router = Router();
import * as collegeControllers from '../controllers/collegeController.js';

// Routes for /colleges
router.get('/', collegeControllers.getColleges);
router.post('/', collegeControllers.createCollege);

// Routes for /colleges/:collegeId
router.get('/:collegeId', collegeControllers.getCollegeById);
router.put('/:collegeId', collegeControllers.updateCollege);
router.delete('/:collegeId', collegeControllers.deleteCollege);

export default router;
