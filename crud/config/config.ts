import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('flipkart', 'postgres', '#Vikas8692', {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;
