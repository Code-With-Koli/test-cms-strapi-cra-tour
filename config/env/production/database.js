module.exports = ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
			host: env('PGHOST', 'postgres.railway.internal'),
			port: env.int('PGPORT', 5432),
			database: env('PGDATABASE', 'railway'),
			user: env('PGUSER', 'postgres'),
			password: env('POSTGRES_PASSWORD'),
			ssl: env.bool(true),
		},
	},
});
