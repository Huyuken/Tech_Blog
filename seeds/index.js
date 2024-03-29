const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');

const sequelize = require('../config/connection');

const seedAll = async () =>
{
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USER TAGS SEEDED -----\n');

    await seedBlogs();
    console.log('\n----- BLOG TAGS SEEDED -----\n');


    process.exit(0);
};

seedAll();