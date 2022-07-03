'use strict';

/**
 * latest-release service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-release.latest-release');
