'use strict';

/**
 * city-attraction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city-attraction.city-attraction');
