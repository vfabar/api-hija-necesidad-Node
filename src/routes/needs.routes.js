const express = require('express');
const router = express.Router();
const needsController = require('../controllers/needs.controller');

/**
 * @swagger
 * /api/needs:
 *   get:
 *     summary: Obtener todas las necesidades
 *     tags:
 *       - Needs
 *     responses:
 *       200:
 *         description: Lista de necesidades encontrada
 */
router.get('/', needsController.getAllNeeds);

/**
 * @swagger
 * /api/needs/{id}:
 *   get:
 *     summary: Obtener necesidad por ID
 *     tags:
 *       - Needs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Necesidad encontrada
 *       404:
 *         description: Necesidad no encontrada
 */
router.get('/:id', needsController.getNeedById);

/**
 * @swagger
 * /api/needs:
 *   post:
 *     summary: Crear una nueva necesidad
 *     tags:
 *       - Needs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               needs:
 *                 type: string
 *                 example: Necesidad de alimentos
 *               id_needs_state:
 *                 type: integer
 *                 example: 1
 *               id_needs_type:
 *                 type: integer
 *                 example: 2
 *               id_ubication:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Necesidad creada correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/', needsController.createNeed);

/**
 * @swagger
 * /api/needs/{id}:
 *   put:
 *     summary: Actualizar una necesidad
 *     tags:
 *       - Needs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               needs:
 *                 type: string
 *                 example: Necesidad actualizada
 *               id_needs_state:
 *                 type: integer
 *                 example: 1
 *               id_needs_type:
 *                 type: integer
 *                 example: 2
 *               id_ubication:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Necesidad actualizada correctamente
 *       404:
 *         description: Necesidad no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', needsController.updateNeed);

/**
 * @swagger
 * /api/needs/{id}:
 *   delete:
 *     summary: Eliminar una necesidad
 *     tags:
 *       - Needs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Necesidad eliminada correctamente
 *       404:
 *         description: Necesidad no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', needsController.deleteNeed);

module.exports = router;