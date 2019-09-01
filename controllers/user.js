const User = require('../models/user');

exports.signup = (request, response) => {
    console.log(request.body)
    const user = new User(request.body);
    user.save((err, user) => {
        if(err) return response.status(400).json({
            err
        })
        response.json({ user })
    }) 
}