'use strict';

/**
 * localez service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::localez.localez');
