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
						return await urn_bll_errors.find_by_id('611bedc525e7b32c3f6415d8');
					}
				}
			}
		},
		bll: () => {
			console.log(some);
			return new MYBLL();
		}
	},
	kart:{
		properties:{
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: 'EMAIL'
			}
		},
		api: {
			url: "/karts",
			routes: {
				mycustom: {
					url: '/c/:id/:date',
					query: ['sick'],
					action: uranio.types.AuthAction.READ,
					method: uranio.types.RouteMethod.GET,
					call: async (_api_request:uranio.types.ApiRequest) => {
						// urn_log.fn_debug(`Router Call GET [find] / [${atom_name}]`);
						const urn_bll = uranio.core.bll.basic.create('request');
						const bll_res = await urn_bll.find_by_id('611bedc525e7b32c3f6415d8');
						return bll_res;
					}
				}
			}
		},
	}
};
