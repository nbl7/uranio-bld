/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

export const atom_book:uranio.types.Book = {
	prodee:{
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		},
		api:{
			url: 'prods'
		}
	},
	prod76ss:{
		properties: {
			t:{
				type: uranio.types.BookPropertyType.TEXT,
				label: 'd'
			}
		},
		api:{
			url: 'prod23'
		}
	}
};
