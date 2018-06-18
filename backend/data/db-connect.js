const pgp = require('pg-promise')();

let connection;

if (process.env.DATABASE_URL) {
	connection = process.env.DATABASE_URL;
} else {
	connection = {
		host: 'localhost',
		port: 5432,
		database: process.env.DATABASE,
		user: process.env.USERNAME,
		password: process.env.PASSWORD
	};
}

const db = pgp(connection);

module.exports = db;
