const { NeedsState } = require('../models');

// GET /api/needs-state
exports.getAllNeedsStates = async (req, res) => {
    try {
        const states = await NeedsState.findAll();
        res.status(200).json(states);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// GET /api/needs-state/:id
exports.getNeedsStateById = async (req, res) => {
    try {
        const state = await NeedsState.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "Needs State not found" });
        res.status(200).json(state);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/needs-state
exports.createNeedsState = async (req, res) => {
    try {
        const state = await NeedsState.create({
            needsState: req.body.needsState
        });
        res.status(201).json(state);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT /api/needs-state/:id
exports.updateNeedsState = async (req, res) => {
    try {
        const state = await NeedsState.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "Needs State not found" });
        await state.update(req.body);
        res.status(200).json(state);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE /api/needs-state/:id
exports.deleteNeedsState = async (req, res) => {
    try {
        const state = await NeedsState.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "Needs State not found" });
        await state.destroy();
        res.status(200).json({ message: "Needs State deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};