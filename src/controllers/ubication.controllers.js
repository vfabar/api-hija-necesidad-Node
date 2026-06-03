const { Ubication, Distric, Region } = require('../models');

// GET /api/ubication
exports.getAllUbications = async (req, res) => {
    try {
        const ubications = await Ubication.findAll({
            include: [{
                model: Distric,
                include: [Region]
            }]
        });
        res.status(200).json(ubications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET /api/ubication/:id
exports.getUbicationById = async (req, res) => {
    try {
        const ubication = await Ubication.findByPk(req.params.id, {
            include: [{
                model: Distric,
                include: [Region]
            }]
        });
        if (!ubication) return res.status(404).json({ message: "Ubication not found" });
        res.status(200).json(ubication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/ubication
exports.createUbication = async (req, res) => {
    try {
        const ubication = await Ubication.create({
            street: req.body.street,
            idDistric: req.body.idDistric // Asegúrate de que coincida con el FK de tu modelo
        });
        res.status(201).json(ubication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /api/ubication/:id
exports.updateUbication = async (req, res) => {
    try {
        const ubication = await Ubication.findByPk(req.params.id);
        if (!ubication) return res.status(404).json({ message: "Ubication not found" });
        await ubication.update(req.body);
        res.status(200).json(ubication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /api/ubication/:id
exports.deleteUbication = async (req, res) => {
    try {
        const ubication = await Ubication.findByPk(req.params.id);
        if (!ubication) return res.status(404).json({ message: "Ubication not found" });
        await ubication.destroy();
        res.status(200).json({ message: "Ubication deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};