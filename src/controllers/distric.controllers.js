const { Distric, Region } = require('../models');

// GET /api/distric
exports.getAllDistrics = async (req, res) => {
    try {
        const districs = await Distric.findAll({
            include: [Region]
        });
        res.status(200).json(districs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET /api/distric/:id
exports.getDistricById = async (req, res) => {
    try {
        const distric = await Distric.findByPk(req.params.id, {
            include: [Region]
        });
        if (!distric) return res.status(404).json({ message: "District not found" });
        res.status(200).json(distric);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/distric
exports.createDistric = async (req, res) => {
    try {
        const distric = await Distric.create({
            distric: req.body.distric,
            idRegion: req.body.idRegion // Clave foránea hacia región
        });
        res.status(201).json(distric);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /api/distric/:id
exports.updateDistric = async (req, res) => {
    try {
        const distric = await Distric.findByPk(req.params.id);
        if (!distric) return res.status(404).json({ message: "District not found" });
        await distric.update(req.body);
        res.status(200).json(distric);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /api/distric/:id
exports.deleteDistric = async (req, res) => {
    try {
        const distric = await Distric.findByPk(req.params.id);
        if (!distric) return res.status(404).json({ message: "District not found" });
        await distric.destroy();
        res.status(200).json({ message: "District deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};