const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) })
      })
      .catch(next)
  }
  //GET
  create(req, res, next) {
    res.render('courses/create')
  }
  //[post] '/courses/store
  store(req, res, next) {
    const formData = req.body
    formData.image ='https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIG3KyxjFdsDMD91oiWGI1cdz_lQ'
    const course = new Course(formData)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((error) => {})
  }
}

module.exports = new CourseController()
