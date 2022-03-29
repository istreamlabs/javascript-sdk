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
import ChannelIngestSlate from './ChannelIngestSlate';
import ChannelIngestSource from './ChannelIngestSource';

/**
 * The ChannelIngest model module.
 * @module model/ChannelIngest
 * @version 0.0.0
 */
class ChannelIngest {
    /**
     * Constructs a new <code>ChannelIngest</code>.
     * Ingest configures inputs for the transcoder.
     * @alias module:model/ChannelIngest
     * @param source {module:model/ChannelIngestSource} 
     */
    constructor(source) { 
        
        ChannelIngest.initialize(this, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source) { 
        obj['source'] = source;
    }

    /**
     * Constructs a <code>ChannelIngest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelIngest} obj Optional instance to populate.
     * @return {module:model/ChannelIngest} The populated <code>ChannelIngest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelIngest();

            if (data.hasOwnProperty('slate')) {
                obj['slate'] = ChannelIngestSlate.constructFromObject(data['slate']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ChannelIngestSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ChannelIngestSlate} slate
 */
ChannelIngest.prototype['slate'] = undefined;

/**
 * @member {module:model/ChannelIngestSource} source
 */
ChannelIngest.prototype['source'] = undefined;






export default ChannelIngest;

