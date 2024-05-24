const User = require('../models/user.js');

exports.loginPage = (req, res) => {
    res.render('login/login', { layout: false });
};

exports.authenticate = async (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        try {
            const user = await User.findOne({ where: { username, password } });
            if (user) {
                req.session.loggedin = true;
                req.session.user_id = user.user_id;
                req.session.role = user.role;

                if (user.role === 'mahasiswa') {
                    if (user.id_fakultas == 72) {
                        res.redirect('/dashboard_it');
                    } else if (user.id_fakultas == 73) {
                        res.redirect('/dashboard_si');
                    } else {
                        res.send('Fakultas tidak ditemukan.');
                    }
                } else {
                    res.send('Role tidak valid.');
                }
            } else {
                res.send('Username atau password salah.');
            }
        } catch (error) {
            res.send('Error during authentication.');
        }
    } else {
        res.send('Mohon masukkan username dan password!');
    }
};
