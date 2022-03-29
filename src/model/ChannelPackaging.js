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
import ChannelPackagingPackagers from './ChannelPackagingPackagers';

/**
 * The ChannelPackaging model module.
 * @module model/ChannelPackaging
 * @version 0.0.0
 */
class ChannelPackaging {
    /**
     * Constructs a new <code>ChannelPackaging</code>.
     * Packaging configures media format and content protection settings.
     * @alias module:model/ChannelPackaging
     */
    constructor() { 
        
        ChannelPackaging.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPackaging</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackaging} obj Optional instance to populate.
     * @return {module:model/ChannelPackaging} The populated <code>ChannelPackaging</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPackaging();

            if (data.hasOwnProperty('packagers')) {
                obj['packagers'] = ApiClient.convertToType(data['packagers'], {'String': ChannelPackagingPackagers});
            }
        }
        return obj;
    }


}

/**
 * Defines the list of packagers available for Publications.
 * @member {Object.<String, module:model/ChannelPackagingPackagers>} packagers
 */
ChannelPackaging.prototype['packagers'] = undefined;






export default ChannelPackaging;
