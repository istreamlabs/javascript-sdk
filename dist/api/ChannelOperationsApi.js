"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorModel = _interopRequireDefault(require("../model/ErrorModel"));

var _GenericSignal = _interopRequireDefault(require("../model/GenericSignal"));

var _InsertMetadataRequest = _interopRequireDefault(require("../model/InsertMetadataRequest"));

var _InsertMetadataResult = _interopRequireDefault(require("../model/InsertMetadataResult"));

var _ProgramSignal = _interopRequireDefault(require("../model/ProgramSignal"));

var _Scte = _interopRequireDefault(require("../model/Scte35"));

var _Segment = _interopRequireDefault(require("../model/Segment"));

var _Slate = _interopRequireDefault(require("../model/Slate"));

var _SpliceInsertEndSignal = _interopRequireDefault(require("../model/SpliceInsertEndSignal"));

var _SpliceInsertStartSignal = _interopRequireDefault(require("../model/SpliceInsertStartSignal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ChannelOperations service.
* @module api/ChannelOperationsApi
* @version 0.0.0
*/
var ChannelOperationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ChannelOperationsApi. 
  * @alias module:api/ChannelOperationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ChannelOperationsApi(apiClient) {
    _classCallCheck(this, ChannelOperationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the clearDvrWindow operation.
   * @callback module:api/ChannelOperationsApi~clearDvrWindowCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Clear DVR Window
   * Clears the DVR window for the channel by removing all video segments in the manifest from before the request.  This sets the earliest time a player can rewind to this point.
   * @param {String} channelId Unique channel identifier
   * @param {module:api/ChannelOperationsApi~clearDvrWindowCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ChannelOperationsApi, [{
    key: "clearDvrWindow",
    value: function clearDvrWindow(channelId, callback) {
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling clearDvrWindow");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/dvr-window', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSignals operation.
     * @callback module:api/ChannelOperationsApi~getSignalsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Segment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Signals
     * Returns the active signals for a channel.
     * @param {String} channelId Unique channel identifier
     * @param {module:api/ChannelOperationsApi~getSignalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Segment>}
     */

  }, {
    key: "getSignals",
    value: function getSignals(channelId, callback) {
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getSignals");
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
      var returnType = [_Segment["default"]];
      return this.apiClient.callApi('/v2/channels/{channel-id}/signal', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertId3 operation.
     * @callback module:api/ChannelOperationsApi~insertId3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InsertMetadataResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert ID3
     * Inserts the provided UTF-8 text metadata in the output stream embedded in a TXXX frame of a ID3 tag.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept List of accepted Content-Type headers
     * @param {module:model/InsertMetadataRequest} opts.insertMetadataRequest 
     * @param {module:api/ChannelOperationsApi~insertId3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsertMetadataResult}
     */

  }, {
    key: "insertId3",
    value: function insertId3(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['insertMetadataRequest']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling insertId3");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _InsertMetadataResult["default"];
      return this.apiClient.callApi('/v2/channels/{channel-id}/id3', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the insertScte35 operation.
     * @callback module:api/ChannelOperationsApi~insertScte35Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert SCTE-35
     * Inserts a SCTE-35 formatted binary payload into the channel.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/Scte35} opts.scte35 
     * @param {module:api/ChannelOperationsApi~insertScte35Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "insertScte35",
    value: function insertScte35(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['scte35']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling insertScte35");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/scte35', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the previewImage operation.
     * @callback module:api/ChannelOperationsApi~previewImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Preview Image
     * Get a static image of what your channel is outputting.  Valid Accept headers are: image/jpeg
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept List of accepted Content-Type headers
     * @param {module:api/ChannelOperationsApi~previewImageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "previewImage",
    value: function previewImage(channelId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling previewImage");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/preview-image', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the programEnd operation.
     * @callback module:api/ChannelOperationsApi~programEndCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Program End
     * Inserts a 'program end' SCTE-35 message into the channel.  This route should only be used for non-overlapping program markers.  If you want overlapping program makers please use Generic Signal instead.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ProgramSignal} opts.programSignal 
     * @param {module:api/ChannelOperationsApi~programEndCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "programEnd",
    value: function programEnd(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['programSignal']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling programEnd");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/program-end', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the programStart operation.
     * @callback module:api/ChannelOperationsApi~programStartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Program Start
     * Inserts a 'program start' SCTE-35 message into the channel.  This route should only be used for non-overlapping program markers.  If you want overlapping program makers please use Generic Signal instead.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ProgramSignal} opts.programSignal 
     * @param {module:api/ChannelOperationsApi~programStartCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "programStart",
    value: function programStart(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['programSignal']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling programStart");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/program-start', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the signal operation.
     * @callback module:api/ChannelOperationsApi~signalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generic Signal
     * Inserts a SCTE-35 message into the channel.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/GenericSignal>} opts.genericSignal 
     * @param {module:api/ChannelOperationsApi~signalCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "signal",
    value: function signal(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['genericSignal']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling signal");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/signal', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the slateIn operation.
     * @callback module:api/ChannelOperationsApi~slateInCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Slate in
     * Replaces the current video source with a slate image or video.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/Slate} opts.slate 
     * @param {module:api/ChannelOperationsApi~slateInCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "slateIn",
    value: function slateIn(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['slate']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling slateIn");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/slate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the slateOut operation.
     * @callback module:api/ChannelOperationsApi~slateOutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Slate out
     * Removes any active slate and show the source video content.
     * @param {String} channelId Unique channel identifier
     * @param {module:api/ChannelOperationsApi~slateOutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "slateOut",
    value: function slateOut(channelId, callback) {
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling slateOut");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/slate', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the spliceEnd operation.
     * @callback module:api/ChannelOperationsApi~spliceEndCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Splice Insert End
     * Inserts a 'splice insert end' SCTE-35 message into the channel.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/SpliceInsertEndSignal} opts.spliceInsertEndSignal 
     * @param {module:api/ChannelOperationsApi~spliceEndCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "spliceEnd",
    value: function spliceEnd(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['spliceInsertEndSignal']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling spliceEnd");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/splice-end', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the spliceStart operation.
     * @callback module:api/ChannelOperationsApi~spliceStartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Splice Insert Start
     * Inserts a 'splice insert start' SCTE-35 message into the channel.
     * @param {String} channelId Unique channel identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/SpliceInsertStartSignal} opts.spliceInsertStartSignal 
     * @param {module:api/ChannelOperationsApi~spliceStartCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "spliceStart",
    value: function spliceStart(channelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['spliceInsertStartSignal']; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling spliceStart");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = ['application/json'];
      var accepts = ['application/problem+json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/channels/{channel-id}/splice-start', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ChannelOperationsApi;
}();

exports["default"] = ChannelOperationsApi;