const pool = require('../db');
const queries = require('../queries/tutor');

// const getTutors = (req, res) => {
//   pool.query('SELECT * FROM tutors', (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   })
// }

const getTutorsWithLessons = (req, res) => {
  pool.query(queries.getTutorsWithLessons, (error, results) => {
    if (error) throw error;

    // Sukurkite objektą, kuriame bus informacija apie kiekvieną lektorių ir jo pamokas
    const tutorsWithLessons = {};

    // Eikite per gautus rezultatus ir sudėkite informaciją į objektą
    results.rows.forEach(row => {
      const tutorId = row.tutor_id;

      // Jei lektoriaus įrašas dar neegzistuoja, sukurti naują
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

      // Pridėkite pamoką prie lektoriaus
      tutorsWithLessons[tutorId].lessons.push({
        lesson_date: row.lesson_date,
      });
    });

    // Konvertuokite objektą į masyvą ir išsiųskite klientui
    const resultArray = Object.values(tutorsWithLessons);
    res.status(200).json(resultArray);
  });
};


module.exports = {
  // getTutors,
  getTutorsWithLessons
}