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
 * The ChannelTranscodeThumbnailEncoders model module.
 * @module model/ChannelTranscodeThumbnailEncoders
 * @version 0.0.0
 */
class ChannelTranscodeThumbnailEncoders {
    /**
     * Constructs a new <code>ChannelTranscodeThumbnailEncoders</code>.
     * @alias module:model/ChannelTranscodeThumbnailEncoders
     */
    constructor() { 
        
        ChannelTranscodeThumbnailEncoders.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelTranscodeThumbnailEncoders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeThumbnailEncoders} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeThumbnailEncoders} The populated <code>ChannelTranscodeThumbnailEncoders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelTranscodeThumbnailEncoders();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Height specifies the thumbnail image height in pixels.
 * @member {Number} height
 */
ChannelTranscodeThumbnailEncoders.prototype['height'] = undefined;

/**
 * Encoder ID. IDs must be unique for all video and thumbnail encoders. This ID is referenced when setting up playlist publishing.
 * @member {String} id
 */
ChannelTranscodeThumbnailEncoders.prototype['id'] = undefined;

/**
 * Width specifies the thumbnail image width in pixels.
 * @member {Number} width
 */
ChannelTranscodeThumbnailEncoders.prototype['width'] = undefined;






export default ChannelTranscodeThumbnailEncoders;

