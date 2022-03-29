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
import Summary2Source from './Summary2Source';

/**
 * The Summary2 model module.
 * @module model/Summary2
 * @version 0.0.0
 */
class Summary2 {
    /**
     * Constructs a new <code>Summary2</code>.
     * @alias module:model/Summary2
     * @param etag {String} Content hash
     * @param id {String} Unique channel ID
     * @param source {module:model/Summary2Source} 
     */
    constructor(etag, id, source) { 
        
        Summary2.initialize(this, etag, id, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, etag, id, source) { 
        obj['etag'] = etag;
        obj['id'] = id;
        obj['source'] = source;
    }

    /**
     * Constructs a <code>Summary2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary2} obj Optional instance to populate.
     * @return {module:model/Summary2} The populated <code>Summary2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Summary2();

            if (data.hasOwnProperty('etag')) {
                obj['etag'] = ApiClient.convertToType(data['etag'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = Summary2Source.constructFromObject(data['source']);
            }
        }
        return obj;
    }


}

/**
 * Content hash
 * @member {String} etag
 */
Summary2.prototype['etag'] = undefined;

/**
 * Unique channel ID
 * @member {String} id
 */
Summary2.prototype['id'] = undefined;

/**
 * Channel Labels
 * @member {Array.<String>} labels
 */
Summary2.prototype['labels'] = undefined;

/**
 * Friendly channel description
 * @member {String} name
 */
Summary2.prototype['name'] = undefined;

/**
 * Link to this resource
 * @member {String} self
 */
Summary2.prototype['self'] = undefined;

/**
 * @member {module:model/Summary2Source} source
 */
Summary2.prototype['source'] = undefined;






export default Summary2;

