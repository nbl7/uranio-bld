import uranio from 'uranio';

export default uranio.register.atom({
	properties: {
		title: {
			type: uranio.types.PropertyType.TEXT,
			label: 'Title'
		},
		body: {
			type: uranio.types.PropertyType.LONG_TEXT,
			label: 'Body',
			on_error: () => {
				return ''
			}
		},
		price: {
			type: uranio.types.PropertyType.FLOAT,
			label: 'Price',
			on_error: () => {
				return 0
			}
		}
	},
	dock: {
		url: '/products'
	},
	security:{
		type: uranio.types.SecurityType.UNIFORM,
		_w: uranio.types.PermissionType.PUBLIC
	}
});
