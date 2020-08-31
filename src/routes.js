module.exports = (app) => {

    app.post('/register', (req, res) => {
        res.send({
            message: `Registration successful email: ${req.body.email}. And  password ${req.body.password}`
        })
    }),

    //a simple get request
    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Hello My World',
            sender: 'Deepesh'
        });
    })


//end of module.exports = (app) => {}
}