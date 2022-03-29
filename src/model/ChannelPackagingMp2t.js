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
 * The ChannelPackagingMp2t model module.
 * @module model/ChannelPackagingMp2t
 * @version 0.0.0
 */
class ChannelPackagingMp2t {
    /**
     * Constructs a new <code>ChannelPackagingMp2t</code>.
     * Uses MP2T format for each segments. Only one of [&#39;mp2t&#39;, &#39;mp4&#39;] may be set.
     * @alias module:model/ChannelPackagingMp2t
     */
    constructor() { 
        
        ChannelPackagingMp2t.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPackagingMp2t</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingMp2t} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingMp2t} The populated <code>ChannelPackagingMp2t</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPackagingMp2t();

            if (data.hasOwnProperty('force_unmuxed_audio')) {
                obj['force_unmuxed_audio'] = ApiClient.convertToType(data['force_unmuxed_audio'], 'Boolean');
            }
            if (data.hasOwnProperty('insert_id3_utc_time')) {
                obj['insert_id3_utc_time'] = ApiClient.convertToType(data['insert_id3_utc_time'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Forces the Video and Audio Encodings to be unmuxed when there is one audio encodings. This setting will have to be uniformed across MP2T packagers within a config. When there are two or more audio encodings, unmuxed will be used automatically.
 * @member {Boolean} force_unmuxed_audio
 */
ChannelPackagingMp2t.prototype['force_unmuxed_audio'] = undefined;

/**
 * If true, insert ID3 tags that include a UTC timestamp. This is a Turner/WM-specific extension.
 * @member {Boolean} insert_id3_utc_time
 */
ChannelPackagingMp2t.prototype['insert_id3_utc_time'] = undefined;






export default ChannelPackagingMp2t;
