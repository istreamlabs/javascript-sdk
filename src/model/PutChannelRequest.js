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
import ChannelPackaging from './ChannelPackaging';
import ChannelPublishing from './ChannelPublishing';
import ChannelSignaling from './ChannelSignaling';
import ChannelTags from './ChannelTags';
import ChannelTranscode from './ChannelTranscode';
import PutChannelRequestIngest from './PutChannelRequestIngest';

/**
 * The PutChannelRequest model module.
 * @module model/PutChannelRequest
 * @version 0.0.0
 */
class PutChannelRequest {
    /**
     * Constructs a new <code>PutChannelRequest</code>.
     * @alias module:model/PutChannelRequest
     * @param ingest {module:model/PutChannelRequestIngest} 
     */
    constructor(ingest) { 
        
        PutChannelRequest.initialize(this, ingest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ingest) { 
        obj['ingest'] = ingest;
    }

    /**
     * Constructs a <code>PutChannelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutChannelRequest} obj Optional instance to populate.
     * @return {module:model/PutChannelRequest} The populated <code>PutChannelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutChannelRequest();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ingest')) {
                obj['ingest'] = PutChannelRequestIngest.constructFromObject(data['ingest']);
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('packaging')) {
                obj['packaging'] = ChannelPackaging.constructFromObject(data['packaging']);
            }
            if (data.hasOwnProperty('publishing')) {
                obj['publishing'] = ChannelPublishing.constructFromObject(data['publishing']);
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('resource_class')) {
                obj['resource_class'] = ApiClient.convertToType(data['resource_class'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('signaling')) {
                obj['signaling'] = ChannelSignaling.constructFromObject(data['signaling']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ChannelTags.constructFromObject(data['tags']);
            }
            if (data.hasOwnProperty('transcode')) {
                obj['transcode'] = ChannelTranscode.constructFromObject(data['transcode']);
            }
        }
        return obj;
    }


}

/**
 * An optional URL to a JSON Schema document describing this resource
 * @member {String} $schema
 */
PutChannelRequest.prototype['$schema'] = undefined;

/**
 * Date and time the channel was created.
 * @member {Date} created
 */
PutChannelRequest.prototype['created'] = undefined;

/**
 * External Channel ID provided at channel creation time
 * @member {String} id
 */
PutChannelRequest.prototype['id'] = undefined;

/**
 * @member {module:model/PutChannelRequestIngest} ingest
 */
PutChannelRequest.prototype['ingest'] = undefined;

/**
 * Optional labels for a channel. Any included labels must be at least 1 character long, but no greater than 256 characters. The maximum number of labels is 10.
 * @member {Array.<String>} labels
 */
PutChannelRequest.prototype['labels'] = undefined;

/**
 * Date and time the channel was last modified.
 * @member {Date} modified
 */
PutChannelRequest.prototype['modified'] = undefined;

/**
 * A friendly human-readable name for the channel. This will get displayed in user interfaces.
 * @member {String} name
 */
PutChannelRequest.prototype['name'] = undefined;

/**
 * @member {module:model/ChannelPackaging} packaging
 */
PutChannelRequest.prototype['packaging'] = undefined;

/**
 * @member {module:model/ChannelPublishing} publishing
 */
PutChannelRequest.prototype['publishing'] = undefined;

/**
 * Region represents the general geolocation for transcoding and stream egress from iStreamPlanet. If no region is provided at channel creation time, then 'US_WEST' is used.
 * @member {module:model/PutChannelRequest.RegionEnum} region
 */
PutChannelRequest.prototype['region'] = undefined;

/**
 * If the ResourceClass is unspecified the channel will default to run in the 'DYNAMIC' ResourceClass. Note that changing the ResourceClass for a running channel is supported and will be performed with no downtime.
 * @member {module:model/PutChannelRequest.ResourceClassEnum} resource_class
 */
PutChannelRequest.prototype['resource_class'] = undefined;

/**
 * Self link for the channel.
 * @member {String} self
 */
PutChannelRequest.prototype['self'] = undefined;

/**
 * @member {module:model/ChannelSignaling} signaling
 */
PutChannelRequest.prototype['signaling'] = undefined;

/**
 * @member {module:model/ChannelTags} tags
 */
PutChannelRequest.prototype['tags'] = undefined;

/**
 * @member {module:model/ChannelTranscode} transcode
 */
PutChannelRequest.prototype['transcode'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
PutChannelRequest['RegionEnum'] = {

    /**
     * value: "US_WEST"
     * @const
     */
    "WEST": "US_WEST",

    /**
     * value: "US_EAST"
     * @const
     */
    "EAST": "US_EAST"
};


/**
 * Allowed values for the <code>resource_class</code> property.
 * @enum {String}
 * @readonly
 */
PutChannelRequest['ResourceClassEnum'] = {

    /**
     * value: "DYNAMIC"
     * @const
     */
    "DYNAMIC": "DYNAMIC",

    /**
     * value: "STATIC"
     * @const
     */
    "STATIC": "STATIC"
};



export default PutChannelRequest;

