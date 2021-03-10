/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

export const atom_book:uranio.types.Book = {
	media: {
		api: {
			url: 'media'
		},
		properties:{
			src:{
				type: uranio.types.BookPropertyType.TEXT,
				label: 'src',
				optional: true
			}
		}
	},
	products: {
		api: {
			url: 'products'
		},
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		}
	},
	products2: {
		api: {
			url: 'products'
		},
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		}
	},
	products9: {
		api: {
			url: 'products'
		},
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		}
	}
};
