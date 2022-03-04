import uranio from 'uranio';

export default uranio.register.atom({
	plural: 'products',
	security: {
		type: uranio.types.SecurityType.UNIFORM,
		_r: uranio.types.PermissionType.NOBODY
	},
	properties: {
		title: {
			type: uranio.types.PropertyType.EMAIL,
			label: 'Title'
		},
		price: {
			type: uranio.types.PropertyType.FLOAT,
			label: 'Price'
		}
	}
});
