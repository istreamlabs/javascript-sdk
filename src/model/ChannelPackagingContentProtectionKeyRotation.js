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
 * The ChannelPackagingContentProtectionKeyRotation model module.
 * @module model/ChannelPackagingContentProtectionKeyRotation
 * @version 0.0.0
 */
class ChannelPackagingContentProtectionKeyRotation {
    /**
     * Constructs a new <code>ChannelPackagingContentProtectionKeyRotation</code>.
     * Configures how keys should be rotated
     * @alias module:model/ChannelPackagingContentProtectionKeyRotation
     */
    constructor() { 
        
        ChannelPackagingContentProtectionKeyRotation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPackagingContentProtectionKeyRotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionKeyRotation} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionKeyRotation} The populated <code>ChannelPackagingContentProtectionKeyRotation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPackagingContentProtectionKeyRotation();

            if (data.hasOwnProperty('interval_secs')) {
                obj['interval_secs'] = ApiClient.convertToType(data['interval_secs'], 'Number');
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = ApiClient.convertToType(data['program'], 'Boolean');
            }
            if (data.hasOwnProperty('program_overlap_skip_encrypt')) {
                obj['program_overlap_skip_encrypt'] = ApiClient.convertToType(data['program_overlap_skip_encrypt'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Rotate keys based on the specified time interval. If Program is also provided then this time interval will only apply to media segments that are outside of program boundaries. If Program is NOT provided then only this time interval will be used to decided when to rotate keys.
 * @member {Number} interval_secs
 */
ChannelPackagingContentProtectionKeyRotation.prototype['interval_secs'] = undefined;

/**
 * Rotate keys on (SCTE35) program boundaries such that no two programs will be protected with the same key.
 * @member {Boolean} program
 */
ChannelPackagingContentProtectionKeyRotation.prototype['program'] = undefined;

/**
 * Do not encrypt segments that are part of more than one SCTE-35 program.
 * @member {Boolean} program_overlap_skip_encrypt
 */
ChannelPackagingContentProtectionKeyRotation.prototype['program_overlap_skip_encrypt'] = undefined;






export default ChannelPackagingContentProtectionKeyRotation;
