const manageUsersService = require('../services/manage-users.service');
class ManageUsersController {
    async renderManageUsersPage(req, res, next) {
        try {
            const users = await manageUsersService.getAllUsers();
            console.log(users);
            res.render('users/index', { users });
        } catch (err) {
            throw err;
        }
    }

    async createNewUser(req, res, next){
        try {
            const newUser = await manageUsersService.createNewUser(req.body);
            res.redirect('/manageUsers/')
        } catch (err) {
            throw err;
        }
    }

    async renderEditUserPage(req, res, next){
        try {
            const user = await manageUsersService.findUserById(req.params.id);
            res.render('users/update', { user })
        } catch (err) {
            throw err;
        }
    }

    async editUser(req, res, next){
        try {
            const newUser = await manageUsersService.editUser(req.body);
            res.redirect('/manageUsers/')
        } catch (err) {
            throw err;
        }
    }

    async deleteUser(req, res, next){
        try{
            await manageUsersService.deleteUser(req.params.id);
            res.redirect('/manageUsers/');
        }catch(err){
            throw err;
        }
    }
}

module.exports = new ManageUsersController();