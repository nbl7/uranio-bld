
import uranio from 'uranio';

export default uranio.register.atom({
	plural: 'emails',
	security: {
		type: uranio.types.SecurityType.UNIFORM
	},
	properties: {
		title: {
			type: uranio.types.PropertyType.TEXT,
			label: 'Title'
		}
	}
});
