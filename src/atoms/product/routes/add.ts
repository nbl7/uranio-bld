import uranio from 'uranio';

export default uranio.register.route({
	method: uranio.types.RouteMethod.GET,
	action: uranio.types.AuthAction.READ,
	url: '/add',
	return: 'number',
	call: () => {
		return 3;
	}
});
