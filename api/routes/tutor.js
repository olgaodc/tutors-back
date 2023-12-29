const { Router } = require('express');

const router = Router();

const tutorController = require('../controllers/tutor');

// router.get('/tutors', tutorController.getTutors);
router.get('/tutors', tutorController.getTutorsWithLessons);

module.exports = router;