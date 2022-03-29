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
 * The Segment model module.
 * @module model/Segment
 * @version 0.0.0
 */
class Segment {
    /**
     * Constructs a new <code>Segment</code>.
     * @alias module:model/Segment
     */
    constructor() { 
        
        Segment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Segment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Segment} obj Optional instance to populate.
     * @return {module:model/Segment} The populated <code>Segment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Segment();

            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('event_id')) {
                obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Number');
            }
            if (data.hasOwnProperty('segment_id')) {
                obj['segment_id'] = ApiClient.convertToType(data['segment_id'], 'Number');
            }
            if (data.hasOwnProperty('slate_url')) {
                obj['slate_url'] = ApiClient.convertToType(data['slate_url'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The program time when the segment ends (or ended).
 * @member {Date} end
 */
Segment.prototype['end'] = undefined;

/**
 * The event_id used in the Signal START that resulted in this signaling segment.
 * @member {Number} event_id
 */
Segment.prototype['event_id'] = undefined;

/**
 * Uniquely identifies the signaling segment for a channel. This is assigned by the transcoder when the segment is created.
 * @member {Number} segment_id
 */
Segment.prototype['segment_id'] = undefined;

/**
 * When set, contains the URL to the slate media asset that will play for the duration of the segment.
 * @member {String} slate_url
 */
Segment.prototype['slate_url'] = undefined;

/**
 * The program time when the segment starts (or started).
 * @member {Date} start
 */
Segment.prototype['start'] = undefined;

/**
 * @member {module:model/Segment.TypeEnum} type
 */
Segment.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Segment['TypeEnum'] = {

    /**
     * value: "SPLICE_INSERT"
     * @const
     */
    "SPLICE_INSERT": "SPLICE_INSERT",

    /**
     * value: "CONTENT_ID"
     * @const
     */
    "CONTENT_ID": "CONTENT_ID",

    /**
     * value: "PROGRAM"
     * @const
     */
    "PROGRAM": "PROGRAM",

    /**
     * value: "PROGRAM_BLACKOUT_OVERRIDE"
     * @const
     */
    "PROGRAM_BLACKOUT_OVERRIDE": "PROGRAM_BLACKOUT_OVERRIDE",

    /**
     * value: "PROGRAM_BREAKAWAY"
     * @const
     */
    "PROGRAM_BREAKAWAY": "PROGRAM_BREAKAWAY",

    /**
     * value: "CHAPTER"
     * @const
     */
    "CHAPTER": "CHAPTER",

    /**
     * value: "BREAK"
     * @const
     */
    "BREAK": "BREAK",

    /**
     * value: "OPENING_CREDIT"
     * @const
     */
    "OPENING_CREDIT": "OPENING_CREDIT",

    /**
     * value: "CLOSING_CREDIT"
     * @const
     */
    "CLOSING_CREDIT": "CLOSING_CREDIT",

    /**
     * value: "PROVIDER_PLACEMENT_OP"
     * @const
     */
    "PROVIDER_PLACEMENT_OP": "PROVIDER_PLACEMENT_OP",

    /**
     * value: "DISTRIBUTOR_PLACEMENT_OP"
     * @const
     */
    "DISTRIBUTOR_PLACEMENT_OP": "DISTRIBUTOR_PLACEMENT_OP",

    /**
     * value: "PROVIDER_OVERLAY_OP"
     * @const
     */
    "PROVIDER_OVERLAY_OP": "PROVIDER_OVERLAY_OP",

    /**
     * value: "DISTRIBUTOR_OVERLAY_OP"
     * @const
     */
    "DISTRIBUTOR_OVERLAY_OP": "DISTRIBUTOR_OVERLAY_OP",

    /**
     * value: "PROVIDER_AD"
     * @const
     */
    "PROVIDER_AD": "PROVIDER_AD",

    /**
     * value: "DISTRIBUTOR_AD"
     * @const
     */
    "DISTRIBUTOR_AD": "DISTRIBUTOR_AD",

    /**
     * value: "UNSCHEDULED_EVENT"
     * @const
     */
    "UNSCHEDULED_EVENT": "UNSCHEDULED_EVENT",

    /**
     * value: "NETWORK"
     * @const
     */
    "NETWORK": "NETWORK",

    /**
     * value: "SLATE"
     * @const
     */
    "SLATE": "SLATE"
};



export default Segment;

