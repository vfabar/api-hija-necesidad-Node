const { NeedsType } = require('../models');

// GET /api/needs-type
exports.getAllNeedsTypes = async (req, res) => {
    try {
        const types = await NeedsType.findAll();
        res.status(200).json(types);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET /api/needs-type/:id
exports.getNeedsTypeById = async (req, res) => {
    try {
        const type = await NeedsType.findByPk(req.params.id);
        if (!type) return res.status(404).json({ message: "Needs Type not found" });
        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/needs-type
exports.createNeedsType = async (req, res) => {
    try {
        const type = await NeedsType.create({
            needsType: req.body.needsType
        });
        res.status(201).json(type);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /api/needs-type/:id
exports.updateNeedsType = async (req, res) => {
    try {
        const type = await NeedsType.findByPk(req.params.id);
        if (!type) return res.status(404).json({ message: "Needs Type not found" });
        await type.update(req.body);
        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /api/needs-type/:id
exports.deleteNeedsType = async (req, res) => {
    try {
        const type = await NeedsType.findByPk(req.params.id);
        if (!type) return res.status(404).json({ message: "Needs Type not found" });
        await type.destroy();
        res.status(200).json({ message: "Needs Type deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};