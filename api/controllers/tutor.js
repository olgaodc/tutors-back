const pool = require('../db');
const queries = require('../queries/tutor');

const getTutorsWithLessons = (req, res) => {
  pool.query(queries.getTutorsWithLessons, (error, results) => {
    if (error) throw error;

    const tutorsWithLessons = {};

    results.rows.forEach(row => {
      const tutorId = row.tutor_id;

      if (!tutorsWithLessons[tutorId]) {
        tutorsWithLessons[tutorId] = {
          tutor_id: tutorId,
          tutor_name: row.tutor_name,
          tutor_surname: row.tutor_surname,
          tutor_specialization: row.tutor_specialization,
          hourly_price: row.hourly_price,
          lessons: [],
        };
      }

      tutorsWithLessons[tutorId].lessons.push({
        lesson_date: row.lesson_date,
      });
    });

    const resultArray = Object.values(tutorsWithLessons);
    res.status(200).json(resultArray);
  });
};

module.exports = {
  // getTutors,
  getTutorsWithLessons
}