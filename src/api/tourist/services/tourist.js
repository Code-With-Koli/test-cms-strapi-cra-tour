'use strict';

/**
 * tourist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tourist.tourist');
