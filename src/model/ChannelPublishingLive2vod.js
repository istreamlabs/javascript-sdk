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
 * The ChannelPublishingLive2vod model module.
 * @module model/ChannelPublishingLive2vod
 * @version 0.0.0
 */
class ChannelPublishingLive2vod {
    /**
     * Constructs a new <code>ChannelPublishingLive2vod</code>.
     * Live2VOD configuration used to archive the channel data, this allows clip creation after the content is no longer live.
     * @alias module:model/ChannelPublishingLive2vod
     */
    constructor() { 
        
        ChannelPublishingLive2vod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPublishingLive2vod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingLive2vod} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingLive2vod} The populated <code>ChannelPublishingLive2vod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPublishingLive2vod();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('retention_days')) {
                obj['retention_days'] = ApiClient.convertToType(data['retention_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Product ID that VODs will be associated with in the Live2VOD system. The value of this ID is pre-configured in the Live2VOD portal.
 * @member {String} product_id
 */
ChannelPublishingLive2vod.prototype['product_id'] = undefined;

/**
 * Specifies the retention time, in days, for archived content.
 * @member {Number} retention_days
 */
ChannelPublishingLive2vod.prototype['retention_days'] = undefined;






export default ChannelPublishingLive2vod;

