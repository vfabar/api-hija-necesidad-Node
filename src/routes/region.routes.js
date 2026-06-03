const express = require('express');
const router = express.Router();
const regionController = require('../controllers/region.controllers');

/**
 * @swagger
 * /api/region:
 *   get:
 *     summary: Obtener todas las regiones
 *     tags:
 *       - Region
 *     responses:
 *       200:
 *         description: Lista de regiones encontrada
 */
router.get('/', regionController.getAllRegions);

/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     summary: Obtener region por ID
 *     tags:
 *       - Region
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Region encontrada
 *       404:
 *         description: Region no encontrada
 */
router.get('/:id', regionController.getRegionById);

/**
 * @swagger
 * /api/region:
 *   post:
 *     summary: Crear una nueva region
 *     tags:
 *       - Region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Región A
 *               description:
 *                 type: string
 *                 example: Descripción de la región A
 *     responses:
 *       201:
 *         description: Region creada correctamente
 *       500:
 *         description: Error del servidor
 */
router.post('/', regionController.createRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     summary: Actualizar una region
 *     tags:
 *       - Region
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
 *               id_distric:
 *                 type: integer
 *                 example: 2
 *               id_region:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Region actualizada correctamente
 *       404:
 *         description: Region no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', regionController.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     summary: Eliminar una region
 *     tags:
 *       - Region
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Region eliminada correctamente
 *       404:
 *         description: Region no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', regionController.deleteRegion);

module.exports = router;