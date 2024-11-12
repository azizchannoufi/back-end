const express = require('express');
const {
  createGrade,
  getGradeById,
  getAllGrades,
  updateGrade,
  deleteGrade
} = require('../controllers/GradeC.js');

const router = express.Router();

// Créer un grade
router.post('/', createGrade);

// Lire un grade par ID
router.get('/:id', getGradeById);

// Lire tous les grades
router.get('/', getAllGrades);

// Mettre à jour un grade
router.put('/:id', updateGrade);

// Supprimer un grade
router.delete('/:id', deleteGrade);

module.exports = router;