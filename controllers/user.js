const User = require('../models/user');
// const bcrypt = require('bcrypt');

exports.signup = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        user.save()
            .then((user) => res.status(201).json({message: "uttilisateur créé !"}))
            .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}))
}

// exports.login= (req, res, next)=>{

// }