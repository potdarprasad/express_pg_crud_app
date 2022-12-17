const pool = require('../config/db.config');

class ManageUsersService {
    async getAllUsers() {
        const users = await pool.query(`SELECT * FROM users`);
        return users.rows;
    }

    async createNewUser(user) {
        const { firstName, lastName, email, mobile } = user;

        const newUser = await pool.query(`INSERT INTO users (first_name, last_name, email, mobile) VALUES ($1, $2, $3, $4) RETURNING *`, [
            firstName, lastName, email, mobile
        ]);

        return newUser;
    }

    async findUserById(id) {
        const users = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
        return users.rows[0];
    }

    async editUser(user) {
        const { id, firstName, lastName, email, mobile } = user;
        await pool.query(`UPDATE users SET first_name = $1, last_name = $2, email = $3, mobile = $4 WHERE id = $5`,
            [firstName, lastName, email, mobile, id]);
        return;
    }

    async deleteUser(id) {
        await pool.query(`DELETE from users WHERE id = $1`,
            [id]);
        return;
    }
}

module.exports = new ManageUsersService();