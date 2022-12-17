const router = require('express').Router();
const pool = require('../config/db.config');
const manageUsersController = require('../controllers/manage-users.controller');

router.get('/', manageUsersController.renderManageUsersPage);

router.get('/create', (req, res) => {
    res.render('users/create');
});

router.post('/create', manageUsersController.createNewUser);

router.get('/edit/:id', manageUsersController.renderEditUserPage);

router.post('/edit', manageUsersController.editUser);

router.get('/delete/:id', manageUsersController.deleteUser);

module.exports = router;