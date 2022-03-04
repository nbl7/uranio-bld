import uranio from 'uranio';

export default uranio.register.route({
	method: uranio.types.RouteMethod.POST,
	action: uranio.types.AuthAction.WRITE,
	url: '/add-review/:ids',
	query: ['stars'],
	params: {
		ids: {array: true}
	},
	return: 'number',
	call: (api_request:uranio.types.Api.Request<'product','add_review'>) => {
		console.log(api_request);
		return 2;
	}
});
