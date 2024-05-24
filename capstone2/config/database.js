import { Sequelize } from "sequelize";

const db = new Sequelize('capstone', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;