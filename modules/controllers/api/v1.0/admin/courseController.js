const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class CourseController extends Controller {
    index(req, res) {
        this.model.Course.find({}, (err, courses) => {
            if (err) throw err;
            if (courses) {
                return res.json(courses);
            }
        })
    }
    single(req, res) {
        Course.find({}, (err, courses) => {
            if (err) throw err;
            if (courses) {
                return res.json(courses);
            }
        })
    }
    store(req, res) {
        let newCourse = new Course({
            title: req.body.title,
            body: req.body.body,
            price: req.body.price,
            image: req.body.image,
        }).save(err => {
            if (err) throw err;
            res.json('create course')
        })
    }
    update(req, res) {
        Course.findByIdAndUpdate(req.params.id, { title: 'course three' }, (err, course) => {
            res.json('update success')
        })
    }
    destroy(req, res) {
        Course.findByIdAndRemove(req.params.id, (err, course) => {
            if (err) throw err;
            res.json('delete success');
        })
    }
}