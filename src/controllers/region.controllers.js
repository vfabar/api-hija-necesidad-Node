const { Region } = require('../models');

// GET /api/region
exports.getAllRegions = async (req, res) => {
    try {
        const regions = await Region.findAll();
        res.status(200).json(regions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET /api/region/:id
exports.getRegionById = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).json({ message: "Region not found" });
        res.status(200).json(region);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/region
exports.createRegion = async (req, res) => {
    try {
        const region = await Region.create({
            region: req.body.region
        });
        res.status(201).json(region);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /api/region/:id
exports.updateRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).json({ message: "Region not found" });
        await region.update(req.body);
        res.status(200).json(region);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /api/region/:id
exports.deleteRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).json({ message: "Region not found" });
        await region.destroy();
        res.status(200).json({ message: "Region deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};