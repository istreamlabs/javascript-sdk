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
 * The ChannelIngestSourceAudioSources model module.
 * @module model/ChannelIngestSourceAudioSources
 * @version 0.0.0
 */
class ChannelIngestSourceAudioSources {
    /**
     * Constructs a new <code>ChannelIngestSourceAudioSources</code>.
     * @alias module:model/ChannelIngestSourceAudioSources
     */
    constructor() { 
        
        ChannelIngestSourceAudioSources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelIngestSourceAudioSources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelIngestSourceAudioSources} obj Optional instance to populate.
     * @return {module:model/ChannelIngestSourceAudioSources} The populated <code>ChannelIngestSourceAudioSources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelIngestSourceAudioSources();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ChannelIngestSourceAudioSources.prototype['id'] = undefined;

/**
 * RFC 5646, e.g. 'en' 'en-US'
 * @member {String} language
 */
ChannelIngestSourceAudioSources.prototype['language'] = undefined;

/**
 * Language fiendly name, e.g. 'English', 'Spanish'
 * @member {String} name
 */
ChannelIngestSourceAudioSources.prototype['name'] = undefined;

/**
 * Expression for choosing an audio track in the stream for this AudioSource https://istreamplanet.atlassian.net/wiki/spaces/T/pages/847970791/Proposal+Audio+Track+Selection
 * @member {String} selector
 */
ChannelIngestSourceAudioSources.prototype['selector'] = undefined;






export default ChannelIngestSourceAudioSources;
