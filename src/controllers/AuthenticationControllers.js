module.exports = {
    register(req, res) {
        res.send({
            message: `Registration successful email: ${req.body.email}. And  password ${req.body.password}`
        })
    }
}