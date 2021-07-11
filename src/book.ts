/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

import {some} from './s';

import {MYBLL} from './server/custom';

export const atom_book:uranio.types.Book = {
	mykart: {
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				label: `${some}title`
			}
		},
		api: {
			url: 'mykarts',
			auth: 'myauthkart'
		},
		bll: () => {
			console.log(some);
			return new MYBLL();
		}
	}
};
