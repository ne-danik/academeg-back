'use strict';

/**
 *  latest-release controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-release.latest-release');
