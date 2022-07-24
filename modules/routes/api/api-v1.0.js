const express = require('express');
const router = express.Router();

// Controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1.0/homecontroller`)

// AdminController
const AdminCourseController = require(`${ControllerApi}/v1.0/admin/CourseController`)

router.get('/', HomeController.index);
router.get('/version', HomeController.version);

const adminRouter = express.Router();
adminRouter.get('/courses', AdminCourseController.index.bind(AdminCourseController));
adminRouter.get('/courses/:id', AdminCourseController.single);
adminRouter.post('/courses', AdminCourseController.store);
adminRouter.put('/courses/:id', AdminCourseController.update);
adminRouter.delete('/courses/:id', AdminCourseController.destroy);
router.use('/admin', adminRouter);

module.exports = router;