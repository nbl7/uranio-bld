/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

import {some} from './server/s';

import {MYBLL} from './server/custom';

export const atom_book:uranio.types.Book = {
	mykart: {
		plural: 'mykarts',
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				label: `${some}titless`
			}
		},
		dock: {
			url: '/mykarts',
			auth: '/myauthkart'
		},
		bll: () => {
			console.log(some + `s`);
			return new MYBLL();
		}
	},
	product: {
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			}
		},
		dock: {
			url: '/products',
			auth: '/proauths'
		}
	}
};
