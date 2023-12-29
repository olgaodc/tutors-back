const getTutorsWithLessons = 'SELECT tutors.id AS tutor_id, tutors.name AS tutor_name, tutors.surname AS tutor_surname, tutors.tutor_specialization AS tutor_specialization, tutors.hourly_price AS hourly_price, lessons.lesson_date FROM tutors LEFT JOIN lessons ON tutors.id = lessons.tutor_id';

module.exports = {
  getTutorsWithLessons,
}