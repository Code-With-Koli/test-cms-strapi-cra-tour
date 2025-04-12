import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksActivity extends Struct.ComponentSchema {
  collectionName: 'components_blocks_activities';
  info: {
    description: '';
    displayName: 'activity';
    icon: 'cursor';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'restaurants',
        'sightseeing',
        'shops-boutiques',
        'where-to-stay',
        'cultural-experiences',
        'outdoor-adventures',
        'nightlife',
        'festivals-events',
        'local-markets',
        'hidden-gems',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'restaurants'>;
  };
}

export interface BlocksExperience extends Struct.ComponentSchema {
  collectionName: 'components_blocks_experiences';
  info: {
    displayName: 'experience';
    icon: 'connector';
  };
  attributes: {
    experience: Schema.Attribute.Text;
    mood: Schema.Attribute.Enumeration<
      ['very-bad', 'bad', 'neutral', 'nice', 'very-nice']
    >;
    tour_activity: Schema.Attribute.Relation<
      'oneToOne',
      'api::tour-activity.tour-activity'
    >;
  };
}

export interface BlocksHighlight extends Struct.ComponentSchema {
  collectionName: 'components_blocks_highlights';
  info: {
    displayName: 'highlight';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    isNew: Schema.Attribute.Boolean;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksLight extends Struct.ComponentSchema {
  collectionName: 'components_blocks_lights';
  info: {
    displayName: 'light';
    icon: 'filter';
  };
  attributes: {
    light: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface BlocksPin extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pins';
  info: {
    displayName: 'pin';
    icon: 'pinMap';
  };
  attributes: {
    lat: Schema.Attribute.Decimal & Schema.Attribute.Required;
    lng: Schema.Attribute.Decimal & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksRouteItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_route_items';
  info: {
    description: '';
    displayName: 'routeItem';
    icon: 'attachment';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    stayingTime: Schema.Attribute.String;
    title: Schema.Attribute.String;
    tour_activities: Schema.Attribute.Relation<
      'oneToMany',
      'api::tour-activity.tour-activity'
    >;
  };
}

export interface BlocksRoutes extends Struct.ComponentSchema {
  collectionName: 'components_blocks_routes';
  info: {
    description: '';
    displayName: 'routes';
    icon: 'car';
  };
  attributes: {
    cities: Schema.Attribute.Relation<'oneToMany', 'api::cra-tour.cra-tour'>;
    cover: Schema.Attribute.Media<'images'>;
    days: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    desc: Schema.Attribute.Text;
    notes: Schema.Attribute.Text & Schema.Attribute.Private;
    routeItem: Schema.Attribute.Component<'blocks.route-item', true>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Day 1'>;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    showOnPage: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksSocials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      [
        'instagram',
        'facebook',
        'tik-tok',
        'youtube',
        'linkedin',
        'twitter',
        'web',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'web'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CraftingCity extends Struct.ComponentSchema {
  collectionName: 'components_crafting_cities';
  info: {
    description: '';
    displayName: 'city';
  };
  attributes: {
    cityName: Schema.Attribute.String;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    date: Schema.Attribute.Date;
    notes: Schema.Attribute.Text;
    requests: Schema.Attribute.Text;
  };
}

export interface CraftingItenerarrItem extends Struct.ComponentSchema {
  collectionName: 'components_crafting_itenerarr_items';
  info: {
    displayName: 'itenerarr-item';
  };
  attributes: {
    city: Schema.Attribute.Relation<'oneToOne', 'api::cra-tour.cra-tour'>;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface CraftingOurCity extends Struct.ComponentSchema {
  collectionName: 'components_crafting_our_cities';
  info: {
    displayName: 'our-city';
  };
  attributes: {
    cities: Schema.Attribute.Relation<'oneToMany', 'api::cra-tour.cra-tour'>;
    date: Schema.Attribute.Date;
    requests: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CraftingRoutes extends Struct.ComponentSchema {
  collectionName: 'components_crafting_routes';
  info: {
    displayName: 'routes';
  };
  attributes: {
    city: Schema.Attribute.String;
  };
}

export interface ServiceServices extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    excludes: Schema.Attribute.Component<'blocks.section', true>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    includes: Schema.Attribute.Component<'blocks.section', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPlace extends Struct.ComponentSchema {
  collectionName: 'components_shared_places';
  info: {
    description: '';
    displayName: 'place';
    icon: 'pinMap';
  };
  attributes: {
    displayTitle: Schema.Attribute.String & Schema.Attribute.Required;
    img: Schema.Attribute.Media<'images'>;
    isExternalLink: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    isSuggested: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rates: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    type: Schema.Attribute.Enumeration<
      [
        'restaurants',
        'sightseeing',
        'shops-boutiques',
        'where-to-stay',
        'cultural-experiences',
        'outdoor-adventures',
        'nightlife',
        'festivals-events',
        'local-markets',
        'hidden-gems',
      ]
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    author: Schema.Attribute.String;
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.activity': BlocksActivity;
      'blocks.experience': BlocksExperience;
      'blocks.highlight': BlocksHighlight;
      'blocks.light': BlocksLight;
      'blocks.pin': BlocksPin;
      'blocks.route-item': BlocksRouteItem;
      'blocks.routes': BlocksRoutes;
      'blocks.section': BlocksSection;
      'blocks.socials': BlocksSocials;
      'crafting.city': CraftingCity;
      'crafting.itenerarr-item': CraftingItenerarrItem;
      'crafting.our-city': CraftingOurCity;
      'crafting.routes': CraftingRoutes;
      'service.services': ServiceServices;
      'shared.media': SharedMedia;
      'shared.place': SharedPlace;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
