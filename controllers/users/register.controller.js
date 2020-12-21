const User = require('../../models/user.model');
const bcrypt = require('bcrypt');

exports.renderRegisterPage = (req, res) => {
    res.render('register')
};

exports.registerUser = (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) {
        errors.push({ msg: "Por favor llene todos los campos" })
    }

    if (password !== password2) {
        errors.push({ msg: "Las contraseñas no coinciden" });
    }

    if (password.length < 6) {
        errors.push({ msg: 'La contraseña debe tener al menos 6 caracteres' })
    }
    if (errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        })
    } else {

        User.findOne({ email: email }).exec((err, user) => {

            if (user) {
                errors.push({ msg: 'email already registered' });
                res.render('register', { errors, name, email, password, password2 })
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });


                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) throw err;

                            newUser.password = hash;

                            newUser.save()
                                .then((value) => {
                                
                                    req.flash('success_msg', 'Se ha registrado exitosamente!');
                                    res.redirect('/users/login');
                                })
                                .catch();

                        }));
            }
        })
    }
};
