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
import ChannelPublishingDash from './ChannelPublishingDash';
import ChannelPublishingHls from './ChannelPublishingHls';
import ChannelPublishingPublishPoints from './ChannelPublishingPublishPoints';

/**
 * The ChannelPublishingPublications model module.
 * @module model/ChannelPublishingPublications
 * @version 0.0.0
 */
class ChannelPublishingPublications {
    /**
     * Constructs a new <code>ChannelPublishingPublications</code>.
     * @alias module:model/ChannelPublishingPublications
     */
    constructor() { 
        
        ChannelPublishingPublications.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPublishingPublications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingPublications} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingPublications} The populated <code>ChannelPublishingPublications</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPublishingPublications();

            if (data.hasOwnProperty('audio_encoder_ids')) {
                obj['audio_encoder_ids'] = ApiClient.convertToType(data['audio_encoder_ids'], ['String']);
            }
            if (data.hasOwnProperty('create_vods')) {
                obj['create_vods'] = ApiClient.convertToType(data['create_vods'], 'Boolean');
            }
            if (data.hasOwnProperty('dash')) {
                obj['dash'] = ChannelPublishingDash.constructFromObject(data['dash']);
            }
            if (data.hasOwnProperty('drms')) {
                obj['drms'] = ApiClient.convertToType(data['drms'], ['String']);
            }
            if (data.hasOwnProperty('dvr_window_secs')) {
                obj['dvr_window_secs'] = ApiClient.convertToType(data['dvr_window_secs'], 'Number');
            }
            if (data.hasOwnProperty('hls')) {
                obj['hls'] = ChannelPublishingHls.constructFromObject(data['hls']);
            }
            if (data.hasOwnProperty('iframe_only_encoder_ids')) {
                obj['iframe_only_encoder_ids'] = ApiClient.convertToType(data['iframe_only_encoder_ids'], ['String']);
            }
            if (data.hasOwnProperty('master_playlist_name')) {
                obj['master_playlist_name'] = ApiClient.convertToType(data['master_playlist_name'], 'String');
            }
            if (data.hasOwnProperty('packager_id')) {
                obj['packager_id'] = ApiClient.convertToType(data['packager_id'], 'String');
            }
            if (data.hasOwnProperty('publish_points')) {
                obj['publish_points'] = ApiClient.convertToType(data['publish_points'], [ChannelPublishingPublishPoints]);
            }
            if (data.hasOwnProperty('redundant_publishing')) {
                obj['redundant_publishing'] = ApiClient.convertToType(data['redundant_publishing'], 'Boolean');
            }
            if (data.hasOwnProperty('thumbnail_encoder_ids')) {
                obj['thumbnail_encoder_ids'] = ApiClient.convertToType(data['thumbnail_encoder_ids'], ['String']);
            }
            if (data.hasOwnProperty('use_strict_bitrate')) {
                obj['use_strict_bitrate'] = ApiClient.convertToType(data['use_strict_bitrate'], 'Boolean');
            }
            if (data.hasOwnProperty('video_encoder_ids')) {
                obj['video_encoder_ids'] = ApiClient.convertToType(data['video_encoder_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Optionally specify which audio encoders should be used for this publication. If none are specified, all audio encoders configured for the transcoder will be used.
 * @member {Array.<String>} audio_encoder_ids
 */
ChannelPublishingPublications.prototype['audio_encoder_ids'] = undefined;

/**
 * Create VODs for all publish points in this publication. Note that Live2VOD must also be configured for the parent |Channel|.
 * @member {Boolean} create_vods
 */
ChannelPublishingPublications.prototype['create_vods'] = undefined;

/**
 * @member {module:model/ChannelPublishingDash} dash
 */
ChannelPublishingPublications.prototype['dash'] = undefined;

/**
 * Optionally specify which DRMs to advertise in the playlist. If specified, this must be a subset of the DRMs specified by the packager associated with this publication. If omitted or empty, all DRMs specified by the packager will be advertised. This setting can only be used for HLS playlists.
 * @member {Array.<module:model/ChannelPublishingPublications.DrmsEnum>} drms
 */
ChannelPublishingPublications.prototype['drms'] = undefined;

/**
 * DVR window is the max sum(duration of media segments) that will be kept in a manifest at a given time in seconds. The max supported DVR window is 10 hours.
 * @member {Number} dvr_window_secs
 */
ChannelPublishingPublications.prototype['dvr_window_secs'] = undefined;

/**
 * @member {module:model/ChannelPublishingHls} hls
 */
ChannelPublishingPublications.prototype['hls'] = undefined;

/**
 * List of video encoder IDs that should have I-Frame only playlists generated for them.
 * @member {Array.<String>} iframe_only_encoder_ids
 */
ChannelPublishingPublications.prototype['iframe_only_encoder_ids'] = undefined;

/**
 * Optional master manifest name. When not supplied a default of 'master' will be used.
 * @member {String} master_playlist_name
 */
ChannelPublishingPublications.prototype['master_playlist_name'] = undefined;

/**
 * Determines how segments in this publication are packaged. Must reference a packager in 'packaging.packagers'. However, if this is a playlist-only publication (i.e. contains publish points that specify 'playlist_only_for'), this must remain unset as the packager will be inferred from the publication this one is providing playlists for.
 * @member {String} packager_id
 */
ChannelPublishingPublications.prototype['packager_id'] = undefined;

/**
 * Publish points specify where to output.
 * @member {Array.<module:model/ChannelPublishingPublishPoints>} publish_points
 */
ChannelPublishingPublications.prototype['publish_points'] = undefined;

/**
 * When redundant publishing is enabled succeeding to publish a given media segment to at least one HTTPPublishPoint in publish_points will result in that segment showing up in manifests as playable content. Will require at least two publish_points defined within the same publication.
 * @member {Boolean} redundant_publishing
 */
ChannelPublishingPublications.prototype['redundant_publishing'] = undefined;

/**
 * Optional: Specify what thumbnail_encoders should be in this Publication
 * @member {Array.<String>} thumbnail_encoder_ids
 */
ChannelPublishingPublications.prototype['thumbnail_encoder_ids'] = undefined;

/**
 * Optional, indicates whether we should pad the bitrate (false) or use what is explicitly provided (true)
 * @member {Boolean} use_strict_bitrate
 */
ChannelPublishingPublications.prototype['use_strict_bitrate'] = undefined;

/**
 * Optionally specify which video encoders should be used for this publication. If none are specified, all video encoders configured for the transcoder will be used.
 * @member {Array.<String>} video_encoder_ids
 */
ChannelPublishingPublications.prototype['video_encoder_ids'] = undefined;





/**
 * Allowed values for the <code>drms</code> property.
 * @enum {String}
 * @readonly
 */
ChannelPublishingPublications['DrmsEnum'] = {

    /**
     * value: "WIDEVINE"
     * @const
     */
    "WIDEVINE": "WIDEVINE",

    /**
     * value: "FAIRPLAY"
     * @const
     */
    "FAIRPLAY": "FAIRPLAY",

    /**
     * value: "PRIMETIME"
     * @const
     */
    "PRIMETIME": "PRIMETIME",

    /**
     * value: "PLAYREADY"
     * @const
     */
    "PLAYREADY": "PLAYREADY"
};



export default ChannelPublishingPublications;

