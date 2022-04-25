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


import ApiClient from "../ApiClient";
import Channel from '../model/Channel';
import ChannelPlayback from '../model/ChannelPlayback';
import ErrorModel from '../model/ErrorModel';
import PutChannelRequest from '../model/PutChannelRequest';
import Summary2 from '../model/Summary2';

/**
* Channels service.
* @module api/ChannelsApi
* @version 0.0.0
*/
export default class ChannelsApi {

    /**
    * Constructs a new ChannelsApi. 
    * @alias module:api/ChannelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteChannel operation.
     * @callback module:api/ChannelsApi~deleteChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete channel
     * Delete a channel and stop publishing.  This action is idempotent.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.ifMatch Succeeds if the server's resource matches one of the passed values.
     * @param {Array.<String>} opts.ifNoneMatch Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
     * @param {Date} opts.ifModifiedSince Succeeds if the server's resource date is more recent than the passed date.
     * @param {Date} opts.ifUnmodifiedSince Succeeds if the server's resource date is older or the same as the passed date.
     * @param {module:api/ChannelsApi~deleteChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteChannel(channelId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling deleteChannel");
      }

      let pathParams = {
        'channel-id': channelId
      };
      let queryParams = {
      };
      let headerParams = {
        'If-Match': opts['ifMatch'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'If-Unmodified-Since': opts['ifUnmodifiedSince']
      };
      let formParams = {
      };

      let authNames = ['authcode', 'm2m'];
      let contentTypes = [];
      let accepts = ['application/problem+json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/channels/{channel-id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getChannel operation.
     * @callback module:api/ChannelsApi~getChannelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Channel
     * Get a channel's configuration
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.ifMatch Succeeds if the server's resource matches one of the passed values.
     * @param {Array.<String>} opts.ifNoneMatch Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
     * @param {Date} opts.ifModifiedSince Succeeds if the server's resource date is more recent than the passed date.
     * @param {Date} opts.ifUnmodifiedSince Succeeds if the server's resource date is older or the same as the passed date.
     * @param {module:api/ChannelsApi~getChannelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    getChannel(channelId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getChannel");
      }

      let pathParams = {
        'channel-id': channelId
      };
      let queryParams = {
      };
      let headerParams = {
        'If-Match': opts['ifMatch'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'If-Unmodified-Since': opts['ifUnmodifiedSince']
      };
      let formParams = {
      };

      let authNames = ['authcode', 'm2m'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Channel;
      return this.apiClient.callApi(
        '/v2/channels/{channel-id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlaybackConfig operation.
     * @callback module:api/ChannelsApi~getPlaybackConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChannelPlayback} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Channel Playback Config
     * Get a channel's playback configuration
     * @param {String} channelId Unique channel identifier
     * @param {module:api/ChannelsApi~getPlaybackConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChannelPlayback}
     */
    getPlaybackConfig(channelId, callback) {
      let postBody = null;
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getPlaybackConfig");
      }

      let pathParams = {
        'channel-id': channelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['authcode', 'm2m'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = ChannelPlayback;
      return this.apiClient.callApi(
        '/v2/channels/{channel-id}/playback', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listChannels operation.
     * @callback module:api/ChannelsApi~listChannelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Summary2>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List channels
     * Get a list of your channels.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Current page cursor
     * @param {Number} opts.pageSize Number of items to return (default to 100)
     * @param {String} opts.q Search query to match against for filtering a list of channels. This searches the channel ID, name, labels, and source ID.
     * @param {module:api/ChannelsApi~listChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Summary2>}
     */
    listChannels(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'cursor': opts['cursor'],
        'page_size': opts['pageSize'],
        'q': opts['q']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['authcode', 'm2m'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = [Summary2];
      return this.apiClient.callApi(
        '/v2/channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putChannel operation.
     * @callback module:api/ChannelsApi~putChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create/Update channel
     * Create or update an existing channel configuration.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.ifMatch Succeeds if the server's resource matches one of the passed values.
     * @param {Array.<String>} opts.ifNoneMatch Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
     * @param {Date} opts.ifModifiedSince Succeeds if the server's resource date is more recent than the passed date.
     * @param {Date} opts.ifUnmodifiedSince Succeeds if the server's resource date is older or the same as the passed date.
     * @param {Boolean} opts.validateOnly Validate request but do not otherwise process it
     * @param {module:model/PutChannelRequest} opts.putChannelRequest 
     * @param {module:api/ChannelsApi~putChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putChannel(channelId, opts, callback) {
      opts = opts || {};
      let postBody = opts['putChannelRequest'];
      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling putChannel");
      }

      let pathParams = {
        'channel-id': channelId
      };
      let queryParams = {
        'validate_only': opts['validateOnly']
      };
      let headerParams = {
        'If-Match': opts['ifMatch'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'If-Unmodified-Since': opts['ifUnmodifiedSince']
      };
      let formParams = {
      };

      let authNames = ['authcode', 'm2m'];
      let contentTypes = ['application/json'];
      let accepts = ['application/problem+json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/channels/{channel-id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
