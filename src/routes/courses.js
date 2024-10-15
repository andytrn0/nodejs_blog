const express = require('express')
const router = express.Router()

const coursesController = require('../app/controllers/CourseController')

// newsController.index
router.post('/store', coursesController.store)
router.get('/create', coursesController.create)
router.get('/:slug', coursesController.show)

module.exports = router
