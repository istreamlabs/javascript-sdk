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
 * The Summary model module.
 * @module model/Summary
 * @version 0.0.0
 */
class Summary {
    /**
     * Constructs a new <code>Summary</code>.
     * @alias module:model/Summary
     * @param id {String} Station source ID
     */
    constructor(id) { 
        
        Summary.initialize(this, id);
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
     * Constructs a <code>Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary} obj Optional instance to populate.
     * @return {module:model/Summary} The populated <code>Summary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Summary();

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
Summary.prototype['id'] = undefined;

/**
 * Source name
 * @member {String} name
 */
Summary.prototype['name'] = undefined;

/**
 * Link to this resource
 * @member {String} self
 */
Summary.prototype['self'] = undefined;






export default Summary;
