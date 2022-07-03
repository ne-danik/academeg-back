'use strict';

/**
 * latest-release router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-release.latest-release');
