import Category from '../models/category.js';

// Get all categories
export async function getCategories(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single category by ID
export async function getCategoryById(req, res) {
    try {
        const category = await Category.findById(req.params.categoryId);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new category
export async function createCategory(req, res) {
    try {
        const category = new Category({
            name: req.body.name,
            description: req.body.description
        });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Update an existing category
export async function updateCategory(req, res) {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.categoryId,
            {
                name: req.body.name,
                description: req.body.description
            },
            { new: true }
        );
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Delete an existing category
export async function deleteCategory(req, res) {
    try {
        const category = await Category.findByIdAndDelete(req.params.categoryId);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
