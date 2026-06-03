const express = require('express');
const router = express.Router();
const needsTypeController = require('../controllers/needsType.controllers');

/**
 * @swagger
 * /api/needsType:
 *   get:
 *     summary: Obtener todos los tipos de necesidades
 *     tags:
 *       - NeedsType
 *     responses:
 *       200:
 *         description: Lista de tipos de necesidades encontrada
 */
router.get('/', needsTypeController.getAllNeedsTypes);

/**
 * @swagger
 * /api/needsType/{id}:
 *   get:
 *     summary: Obtener tipo de necesidad por ID
 *     tags:
 *       - NeedsType
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de necesidad encontrado
 *       404:
 *         description: Tipo de necesidad no encontrado
 */
router.get('/:id', needsTypeController.getNeedsTypeById);

/**
 * @swagger
 * /api/needsType:
 *   post:
 *     summary: Crear un nuevo tipo de necesidad
 *     tags:
 *       - NeedsType
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
router.post('/', needsTypeController.createNeedsType);

/**
 * @swagger
 * /api/needsType/{id}:
 *   put:
 *     summary: Actualizar un tipo de necesidad
 *     tags:
 *       - NeedsType
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
router.put('/:id', needsTypeController.updateNeedsType);

/**
 * @swagger
 * /api/needsType/{id}:
 *   delete:
 *     summary: Eliminar un tipo de necesidad
 *     tags:
 *       - NeedsType
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
router.delete('/:id', needsTypeController.deleteNeedsType);

module.exports = router;