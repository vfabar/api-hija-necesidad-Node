const express = require('express');
const router = express.Router();
const ubicationController = require('../controllers/ubication.controllers');

/**
 * @swagger
 * /api/ubication:
 *   get:
 *     summary: Obtener todas las ubicaciones
 *     tags:
 *       - Ubication
 *     responses:
 *       200:
 *         description: Lista de ubicaciones encontrada
 */
router.get('/', ubicationController.getAllUbications);

/**
 * @swagger
 * /api/ubication/{id}:
 *   get:
 *     summary: Obtener ubicación por ID
 *     tags:
 *       - Ubication
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ubicación encontrada
 *       404:
 *         description: Ubicación no encontrada
 */
router.get('/:id', ubicationController.getUbicationById);

/**
 * @swagger
 * /api/ubication:
 *   post:
 *     summary: Crear una nueva ubicación
 *     tags:
 *       - Ubication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ubication:
 *                 type: string
 *                 example: Ubicación A
 *               id_ubication:
 *                 type: integer
 *                 example: 1
 *               id_distric:
 *                 type: integer
 *                 example: 2
 *               id_region:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Ubicación creada correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/', ubicationController.createUbication);

/**
 * @swagger
 * /api/ubication/{id}:
 *   put:
 *     summary: Actualizar una ubicación
 *     tags:
 *       - Ubication
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
 *               ubication:
 *                 type: string
 *                 example: Ubicación actualizada
 *               id_ubication_state:
 *                 type: integer
 *                 example: 1
 *               id_ubication_type:
 *                 type: integer
 *                 example: 2
 *               id_ubication:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Ubicación actualizada correctamente
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', ubicationController.updateUbication);

/**
 * @swagger
 * /api/ubication/{id}:
 *   delete:
 *     summary: Eliminar una ubicación
 *     tags:
 *       - Ubication
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ubicación eliminada correctamente
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', ubicationController.deleteUbication);

module.exports = router;