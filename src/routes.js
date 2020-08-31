const AuthenticationController = require('./controllers/AuthenticationControllers');
module.exports = (app) => {
    //post request handler
    app.post('/register', AuthenticationController.register)

    //a simple get request
    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Hello My World',
            sender: 'Deepesh'
        });
    })

//end of module.exports = (app) => {}
}