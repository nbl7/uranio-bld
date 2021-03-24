/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

export const atom_book:uranio.types.Book = {
	product:{
		api: {
			url: 'products'
		},
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		}
	},
	media:{
		api: {
			url: 'medias',
		},
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		}
	}
};
