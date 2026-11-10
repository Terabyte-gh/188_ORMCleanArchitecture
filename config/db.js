const db = require('../models');

async function connectDatabase() {
    try {
        await db.require.authenticate();
        console.log('Connection connected successfully.');

        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized successfully.');
    }  catch (err) {
        console.error('Unable to connect to the database:', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;