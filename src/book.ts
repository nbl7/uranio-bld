/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

import {MYBLL} from './server/custom';

export const atom_book:uranio.types.Book = {
	mykart:{
		properties:{
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		},
		bll: () => {
			return new MYBLL();
		},
		api: {
			
		}
	}
};
