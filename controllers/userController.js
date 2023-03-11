import User from '../models/user.js';

export async function createUser(req, res) {
    try {
        const { email, password, name, isOrganizer, collegeId } = req.body;
        const user = new User({
            email,
            password,
            name,
            isOrganizer,
            college: collegeId,
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

export async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.userId)
            .populate('college', 'name')
            .populate('eventsOrganized', 'title')
            .populate('eventsRegistered', 'title');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

export async function updateUser(req, res) {
    try {
        const { email, password, name, isOrganizer, collegeId } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {
                email,
                password,
                name,
                isOrganizer,
                college: collegeId,
            },
            { new: true }
        )
            .populate('college', 'name')
            .populate('eventsOrganized', 'title')
            .populate('eventsRegistered', 'title');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

export async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
