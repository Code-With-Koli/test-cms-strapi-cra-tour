module.exports = [
	'strapi::errors',
	'strapi::security',
	'strapi::cors',
	{
		name: 'strapi::cors',
		config: {
			enabled: true,
			origin: ['*'], // Or use your domain to be more specific
			headers: ['Content-Type', 'Authorization', 'X-Requested-With'],
		},
	},
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',

	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:'],
					'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'cratour.s3.eu-south-1.amazonaws.com', 'res.cloudinary.com'],
					'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'cratour.s3.eu-south-1.amazonaws.com', 'res.cloudinary.com'],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
];
