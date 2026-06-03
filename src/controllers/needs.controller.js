const {
    Needs,
    NeedsState,
    NeedsType,
    Ubication,
    Distric,
    Region
} = require('../models');

/**
 * GET /api/needs
 *
 * Obtiene todas las necesidades con:
 * - Estado
 * - Tipo
 * - Ubicación
 * - Distrito
 * - Región
 */
exports.getAllNeeds = async (req, res) => {
    try {
        const needs = await Needs.findAll({
            include: [
                NeedsState,
                NeedsType,
                {
                    model: Ubication,
                    include: [
                        {
                            model: Distric,
                            include: [
                                Region
                            ]
                        }
                    ]
                }
            ]
        });
        res.status(200).json(needs);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * GET /api/needs/:id
 */
exports.getNeedById = async (req, res) => {
    try {
        const need = await Needs.findByPk(
            req.params.id,
            {
                include: [
                    NeedsState,
                    NeedsType,
                    {
                        model: Ubication,
                        include: [
                            {
                                model: Distric,
                                include: [
                                    Region
                                ]
                            }
                        ]
                    }
                ]
            }
        );
        if (!need) {
            return res.status(404).json({
                message: "Need not found"
            });
        }
        res.status(200).json(need);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * POST /api/needs
 */
exports.createNeed = async (req, res) => {
    try {
        const need = await Needs.create({
            needs: req.body.needs,
            id_needs_state: req.body.id_needs_state,
            id_needs_type: req.body.id_needs_type,
            id_ubication: req.body.id_ubication
        });
        res.status(201).json(need);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * PUT /api/needs/:id
 */
exports.updateNeed = async (req, res) => {
    try {
        const need = await Needs.findByPk(req.params.id);
        if (!need) {
            return res.status(404).json({
                message: "Need not found"
            });
        }
        await need.update(req.body);
        res.status(200).json(need);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
/**
 * DELETE /api/needs/:id
 */
exports.deleteNeed = async (req, res) => {

    try {
        const need = await Needs.findByPk(req.params.id);
        if (!need) {
            return res.status(404).json({
                message: "Need not found"
            });
        }
        await need.destroy();
        res.status(200).json({
            message: "Need deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};