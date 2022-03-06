import uranio from 'uranio';

export default uranio.register.atom({
	plural: 'karts',
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
		},
		description: {
			type: uranio.types.PropertyType.LONG_TEXT,
			label: 'Description'
		}
	},
	dock: {
		url: '/karts'
	}
});
