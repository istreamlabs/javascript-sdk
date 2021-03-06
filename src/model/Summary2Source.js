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
 * The Summary2Source model module.
 * @module model/Summary2Source
 * @version 0.0.0
 */
class Summary2Source {
    /**
     * Constructs a new <code>Summary2Source</code>.
     * Channel source
     * @alias module:model/Summary2Source
     * @param id {String} Station source ID
     */
    constructor(id) { 
        
        Summary2Source.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Summary2Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary2Source} obj Optional instance to populate.
     * @return {module:model/Summary2Source} The populated <code>Summary2Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Summary2Source();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Station source ID
 * @member {String} id
 */
Summary2Source.prototype['id'] = undefined;

/**
 * Source name
 * @member {String} name
 */
Summary2Source.prototype['name'] = undefined;

/**
 * Link to this resource
 * @member {String} self
 */
Summary2Source.prototype['self'] = undefined;






export default Summary2Source;

