"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Channel = _interopRequireDefault(require("../model/Channel"));

var _ChannelPlayback = _interopRequireDefault(require("../model/ChannelPlayback"));

var _ErrorModel = _interopRequireDefault(require("../model/ErrorModel"));

var _PutChannelRequest = _interopRequireDefault(require("../model/PutChannelRequest"));

var _Summary = _interopRequireDefault(require("../model/Summary2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Channels service.
* @module api/ChannelsApi
* @version 0.0.0
*/
var ChannelsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ChannelsApi. 
  * @alias module:api/ChannelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ChannelsApi(apiClient) {
    _classCallCheck(this, ChannelsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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
   * Delete a channel and stop publishing.
   * @param {String} channelId Unique channel identifier
   * @param {Object} opts Optional parameters
   * @param {Date} opts.ifUnmodifiedSince Succeeds if the server's resource date is older or the same as the passed date.
   * @param {Array.<String>} opts.ifMatch Succeeds if the server's resource matches one of the passed values.
   * @param {Array.<String>} opts.ifNoneMatch Succeeds if the server's resource matches none of the passed values. On writes, the special value * may be used to match any existing value.
   * @param {Date} opts.ifModifiedSince Succeeds if the server's resource date is more recent than the passed date.
   * @param {module:api/ChannelsApi~deleteChannelCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ChannelsApi, [{
    key: "deleteChannel",
    value: function deleteChannel(channelId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling deleteChannel");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {
        'If-Unmodified-Since': opts['ifUnmodifiedSince'],
        'If-Match': opts['ifMatch'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getChannel",
    value: function getChannel(channelId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getChannel");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {
        'If-Match': opts['ifMatch'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'If-Unmodified-Since': opts['ifUnmodifiedSince']
      };
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _Channel["default"];
      return this.apiClient.callApi('/v2/channels/{channel-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "getPlaybackConfig",
    value: function getPlaybackConfig(channelId, callback) {
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getPlaybackConfig");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _ChannelPlayback["default"];
      return this.apiClient.callApi('/v2/channels/{channel-id}/playback', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Number} opts.pageSize Number of items to return (default to 100)
     * @param {String} opts.cursor Current page cursor
     * @param {String} opts.q Search query to match against for filtering a list of channels. This searches the channel ID, name, labels, and source ID.
     * @param {module:api/ChannelsApi~listChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Summary2>}
     */

  }, {
    key: "listChannels",
    value: function listChannels(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page_size': opts['pageSize'],
        'cursor': opts['cursor'],
        'q': opts['q']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = [_Summary["default"]];
      return this.apiClient.callApi('/v2/channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "putChannel",
    value: function putChannel(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['putChannelRequest']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling putChannel");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {
        'validate_only': opts['validateOnly']
      };
      var headerParams = {
        'If-Match': opts['ifMatch'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'If-Unmodified-Since': opts['ifUnmodifiedSince']
      };
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ChannelsApi;
}();

exports["default"] = ChannelsApi;