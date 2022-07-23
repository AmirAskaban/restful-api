const app = require('express')();
const bodyParser = require('body-parser');
const mongooes = require('mongoose');
global.config = require('./modules/config');

//connect to DB
mongooes.connect('mongodb://127.0.0.1:27017/AmirAskaban');
mongooes.Promise = global.Promise;

const userModel = mongooes.model('user', UserSchema);
new userModel({
    name: "amir ehsani"
}).save(err => {
    if (err) throw err;
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

const webRouter = require('./modules/routes/web');
const apiRouter = require('./modules/routes/api');


app.use('/', webRouter);
app.use('/api', apiRouter);

app.listen(config.port, () => {
    console.log(`server running at port ${config.port}`)
});