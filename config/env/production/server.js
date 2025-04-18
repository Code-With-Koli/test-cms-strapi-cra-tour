module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1338),
	// TODO
	url: env('APP_URL', 'https://test-cms-strapi-cra-tour-production.up.railway.app'),
	app: {
		keys: env.array('APP_KEYS'),
	},
	webhooks: {
		populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
	},
});
