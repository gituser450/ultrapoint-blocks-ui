'use strict';

import baseConfig from './base';

let config = {
    BASE_API: 'http://104.219.251.190:8081/api' /// your base api for XHR
};

export default Object.freeze(Object.assign({}, baseConfig, config));
