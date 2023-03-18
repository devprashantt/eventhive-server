import cloudinary from 'cloudinary';

export async function uploadImage(req, res) {
    try {
        const { image } = req.body;
        const result = await cloudinary.v2.uploader.upload(image, {
            folder: 'eventhive',
        });
        res.status(200).json({ url: result.secure_url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}