'use strict';

/**
 * cra-tour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cra-tour.cra-tour');
