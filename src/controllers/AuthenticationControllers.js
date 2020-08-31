const User = require("../models/User")

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        }
        catch (err) {
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }
        // res.send({
        //     message: `Registration successful email: ${req.body.email}. And  password ${req.body.password}`
        // })
    }
}