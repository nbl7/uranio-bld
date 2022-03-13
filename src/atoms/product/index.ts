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
