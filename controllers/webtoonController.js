const Webtoon = require('../models/webtoonModel');

// Create a new Webtoon
exports.createWebtoon = async (req, res) => {
    const { webtoonTitle, characterName, characterId, description } = req.body;

    if (!webtoonTitle || !characterName || !characterId) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const newWebtoon = new Webtoon({
            webtoonTitle,
            characterName,
            characterId,
            description
        });

        await newWebtoon.save();
        res.status(201).json({ message: 'Webtoon created successfully', webtoon: newWebtoon });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating webtoon', error: err.message });
    }
};

// Get all Webtoons
exports.getAllWebtoons = async (req, res) => {
    try {
        const webtoons = await Webtoon.find();
        res.status(200).json({ webtoons });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching webtoons', error: err.message });
    }
};

// Get a specific Webtoon by ID
exports.getWebtoonById = async (req, res) => {
    try {
        const webtoon = await Webtoon.findOne({ characterId: req.params.characterId });
        if (!webtoon) {
            return res.status(404).json({ message: 'Webtoon not found' });
        }
        res.json(webtoon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Webtoon by ID
exports.updateWebtoon = async (req, res) => {
    const { id } = req.params;
    const { webtoonTitle, characterName, characterId, description } = req.body;

    try {
        const existingWebtoon = await Webtoon.findOne({ characterId });
        if (existingWebtoon) {
            return res.status(400).json({ message: 'characterId already exists' });
        }

        const newWebtoon = new Webtoon({ webtoonTitle, characterName, characterId, description });
        const savedWebtoon = await newWebtoon.save();
        res.status(201).json(savedWebtoon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Webtoon by ID
exports.deleteWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.findOneAndDelete({ characterId: req.params.characterId });
        if (!webtoon) {
            return res.status(404).json({ message: 'Webtoon not found' });
        }
        res.json({ message: 'Webtoon deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
