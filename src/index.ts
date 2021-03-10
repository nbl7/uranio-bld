/**
 * Index module
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

uranio.lib.log.defaults.log_level = uranio.lib.log.LogLevel.FUNCTION_DEBUG;

const express_service = uranio.service.express.create();

express_service.listen(3000, () => {
	uranio.lib.log.debug(`Listening on port 3000...`);
});

// const media_bll = uranio.core.bll.basic.create('media');
// media_bll.find({}).then((d)=>console.log(d));


