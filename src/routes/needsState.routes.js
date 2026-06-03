const express = require('express');
const router = express.Router();
const needsStateController = require('../controllers/needsState.controllers');

/**
 * @swagger
 * /api/needsState:
 *   get:
 *     summary: Obtener todas las necesidades
 *     tags:
 *       - NeedsState
 *     responses:
 *       200:
 *         description: Lista de necesidades encontrada
 */
router.get('/', needsStateController.getAllNeedsStates);

/**
 * @swagger
 * /api/needsState/{id}:
 *   get:
 *     summary: Obtener estado de necesidad por ID
 *     tags:
 *       - NeedsState
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estado de necesidad encontrado
 *       404:
 *         description: Estado de necesidad no encontrado
 */
router.get('/:id', needsStateController.getNeedsStateById);

/**
 * @swagger
 * /api/needsState:
 *   post:
 *     summary: Crear un nuevo estado de necesidad
 *     tags:
 *       - NeedsState
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               needsState:
 *                 type: string
 *                 example: Pendiente
 *     responses:
 *       201:
 *         description: Estado de necesidad creado correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/', needsStateController.createNeedsState);

/**
 * @swagger
 * /api/needsState/{id}:
 *   put:
 *     summary: Actualizar un estado de necesidad
 *     tags:
 *       - NeedsState
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
 *               needsState:
 *                 type: string
 *                 example: Completado
 *     responses:
 *       200:
 *         description: Estado de necesidad actualizado correctamente
 *       404:
 *         description: Estado de necesidad no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', needsStateController.updateNeedsState);

/**
 * @swagger
 * /api/needsState/{id}:
 *   delete:
 *     summary: Eliminar un estado de necesidad
 *     tags:
 *       - NeedsState
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
router.delete('/:id', needsStateController.deleteNeedsState);

module.exports = router;