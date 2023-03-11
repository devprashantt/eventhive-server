import College from '../models/college.js';

// Get all colleges
export async function getColleges(req, res) {
    try {
        const colleges = await College.find();
        res.status(200).json(colleges);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single college by ID
export async function getCollegeById(req, res) {
    try {
        const college = await findById(req.params.collegeId);
        if (!college) {
            return res.status(404).json({ error: 'College not found' });
        }
        res.status(200).json(college);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new college
export async function createCollege(req, res) {
    try {
        const college = new College({
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
        });
        await college.save();
        res.status(201).json(college);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Update an existing college
export async function updateCollege(req, res) {
    try {
        const college = await findByIdAndUpdate(
            req.params.collegeId,
            {
                name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
            },
            { new: true }
        );
        if (!college) {
            return res.status(404).json({ error: 'College not found' });
        }
        res.status(200).json(college);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Delete an existing college
export async function deleteCollege(req, res) {
    try {
        const college = await findByIdAndDelete(req.params.collegeId);
        if (!college) {
            return res.status(404).json({ error: 'College not found' });
        }
        res.status(200).json({ message: 'College deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
