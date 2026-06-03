const express = require('express');
const router = express.Router();
const districController = require('../controllers/distric.controllers');

/**
 * @swagger
 * /api/distric:
 *   get:
 *     summary: Obtener todos los distritos
 *     tags:
 *       - Distric
 *     responses:
 *       200:
 *         description: Lista de distritos encontrada
 */
router.get('/', districController.getAllDistrics);

/**
 * @swagger
 * /api/distric/{id}:
 *   get:
 *     summary: Obtener distrito por ID
 *     tags:
 *       - Distric
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
router.get('/:id', districController.getDistricById);

/**
 * @swagger
 * /api/distric:
 *   post:
 *     summary: Crear un nuevo distrito
 *     tags:
 *       - Distric
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
router.post('/', districController.createDistric);

/**
 * @swagger
 * /api/distric/{id}:
 *   put:
 *     summary: Actualizar un distrito
 *     tags:
 *       - Distric
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
router.put('/:id', districController.updateDistric);

/**
 * @swagger
 * /api/distric/{id}:
 *   delete:
 *     summary: Eliminar un distrito
 *     tags:
 *       - Distric
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Distrito eliminado correctamente
 *       404:
 *         description: Distrito no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', districController.deleteDistric);

module.exports = router;