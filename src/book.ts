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
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				label: `${some}title`
			}
		},
		api: {
			url: 'mykarts',
			auth: 'myauthkart',
			routes: {
				myroute:{
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: '/myroute',
					query: ['myq'],
					call: async (api_request:uranio.types.ApiRequest) => {
						console.log(api_request);
						const urn_bll_errors = uranio.core.bll.basic.create('error');
						return await urn_bll_errors.find({});
					}
				}
			}
		},
		bll: () => {
			console.log(some);
			return new MYBLL();
		}
	}
};
