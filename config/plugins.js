module.exports = ({ env }) => ({
	graphql: {
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: env('NODE_ENV') !== 'production',
			depthLimit: 7,
			amountLimit: 100,
		},
	},
});
