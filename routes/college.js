import { Router } from 'express';
const router = Router();
import * as college from '../controllers/college.js';

// Routes for /colleges
router.get('/', college.getColleges);
router.post('/', college.createCollege);

// Routes for /colleges/:collegeId
router.get('/:collegeId', college.getCollegeById);
router.put('/:collegeId', college.updateCollege);
router.delete('/:collegeId', college.deleteCollege);

export default router;
