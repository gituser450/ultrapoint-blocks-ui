'use strict';

import baseConfig from './base';

let config = {
    BASE_API: 'http://127.0.0.1:8081/api'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
