module.exports = ({ env }) => ({
	// seo: {
	// 	enabled: true,
	// },
	graphql: {
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: true,
			depthLimit: 10,
			amountLimit: 100,
			apolloServer: {
				tracing: false,
				introspection: true,
			},
		},
	},

	upload: {
		config: {
			provider: 'cloudinary',

			providerOptions: {
				cloud_name: env('CLOUDINARY_NAME'),

				api_key: env('CLOUDINARY_KEY'),

				api_secret: env('CLOUDINARY_SECRET'),
			},

			actionOptions: {
				upload: {},

				delete: {},
			},
		},
	},
});
