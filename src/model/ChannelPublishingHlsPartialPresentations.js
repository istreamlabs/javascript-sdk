/**
 * iStreamPlanet Channels API
 * This API provides a way to list, create, and run channels.  Channels consist of inputs (ingest), transcoding settings like codecs and bitrates, and outputs (publishing).  List calls use cursor-based pagination with [RFC 5988](https://tools.ietf.org/html/rfc5988) Link headers. Clients *should* read this header and follow the next link to read all pages of results. 
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: support@istreamplanet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ChannelPublishingHlsPartialPresentations model module.
 * @module model/ChannelPublishingHlsPartialPresentations
 * @version 0.0.0
 */
class ChannelPublishingHlsPartialPresentations {
    /**
     * Constructs a new <code>ChannelPublishingHlsPartialPresentations</code>.
     * @alias module:model/ChannelPublishingHlsPartialPresentations
     */
    constructor() { 
        
        ChannelPublishingHlsPartialPresentations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPublishingHlsPartialPresentations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingHlsPartialPresentations} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingHlsPartialPresentations} The populated <code>ChannelPublishingHlsPartialPresentations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPublishingHlsPartialPresentations();

            if (data.hasOwnProperty('audio_encoder_ids')) {
                obj['audio_encoder_ids'] = ApiClient.convertToType(data['audio_encoder_ids'], ['String']);
            }
            if (data.hasOwnProperty('iframe_only_encoder_ids')) {
                obj['iframe_only_encoder_ids'] = ApiClient.convertToType(data['iframe_only_encoder_ids'], ['String']);
            }
            if (data.hasOwnProperty('playlist_path')) {
                obj['playlist_path'] = ApiClient.convertToType(data['playlist_path'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_encoder_ids')) {
                obj['thumbnail_encoder_ids'] = ApiClient.convertToType(data['thumbnail_encoder_ids'], ['String']);
            }
            if (data.hasOwnProperty('video_encoder_ids')) {
                obj['video_encoder_ids'] = ApiClient.convertToType(data['video_encoder_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specify which audio encoders should be used for this presentation. If none are specified, all audio encoders configured for the parent Publication will be used.
 * @member {Array.<String>} audio_encoder_ids
 */
ChannelPublishingHlsPartialPresentations.prototype['audio_encoder_ids'] = undefined;

/**
 * List of video encoder IDs that should have I-Frame only playlists generated for them.
 * @member {Array.<String>} iframe_only_encoder_ids
 */
ChannelPublishingHlsPartialPresentations.prototype['iframe_only_encoder_ids'] = undefined;

/**
 * Sub-path that will be appended onto the publish and playback base URLs of HTTP PublishPoints for published playlist files.
 * @member {String} playlist_path
 */
ChannelPublishingHlsPartialPresentations.prototype['playlist_path'] = undefined;

/**
 * Specify which thumbnail encoders should be used for this presentation. If none are specified, all thumbnail encoders configured for the parent Publication will be used.
 * @member {Array.<String>} thumbnail_encoder_ids
 */
ChannelPublishingHlsPartialPresentations.prototype['thumbnail_encoder_ids'] = undefined;

/**
 * Specify which video encoders should be used for this presentation. If none are specified, all video encoders configured for the parent Publication will be used.
 * @member {Array.<String>} video_encoder_ids
 */
ChannelPublishingHlsPartialPresentations.prototype['video_encoder_ids'] = undefined;






export default ChannelPublishingHlsPartialPresentations;
