import uranio from 'uranio';

export default uranio.register.route({
	method: uranio.types.RouteMethod.GET,
	action: uranio.types.AuthAction.READ,
	url: '/adds',
	return: 'number',
	query: ['a'],
	call: (req: uranio.types.Api.Request<'product', 'new'>) => {
		console.log(req.query.a);
		return 3;
	}
});
