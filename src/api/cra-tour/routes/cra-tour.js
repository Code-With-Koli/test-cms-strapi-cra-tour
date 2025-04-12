'use strict';

/**
 * cra-tour router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cra-tour.cra-tour');
