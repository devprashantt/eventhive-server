import Resource from '../models/resource.js';

// Get all resources
export async function getResources(req, res) {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single resource by ID
export async function getResourceById(req, res) {
    try {
        const resource = await findById(req.params.resourceId);
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.status(200).json(resource);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new resource
export async function createResource(req, res) {
    try {
        const resource = new Resource({
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
        });
        await resource.save();
        res.status(201).json(resource);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Update an existing resource
export async function updateResource(req, res) {
    try {
        const resource = await findByIdAndUpdate(
            req.params.resourceId,
            {
                name: req.body.name,
                description: req.body.description,
                quantity: req.body.quantity,
            },
            { new: true }
        );
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.status(200).json(resource);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Delete an existing resource
export async function deleteResource(req, res) {
    try {
        const resource = await findByIdAndDelete(req.params.resourceId);
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
