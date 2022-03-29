"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelTimelineEntry = _interopRequireDefault(require("../model/ChannelTimelineEntry"));

var _ErrorModel = _interopRequireDefault(require("../model/ErrorModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* AuditOperations service.
* @module api/AuditOperationsApi
* @version 0.0.0
*/
var AuditOperationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuditOperationsApi. 
  * @alias module:api/AuditOperationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuditOperationsApi(apiClient) {
    _classCallCheck(this, AuditOperationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getChannelTimeline operation.
   * @callback module:api/AuditOperationsApi~getChannelTimelineCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ChannelTimelineEntry>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Channel Timeline
   * Returns up to twenty items from the event timeline for a channel, sorted in reverse-chronological order.
   * @param {String} channelId Unique channel identifier
   * @param {Object} opts Optional parameters
   * @param {Number} opts.offset Number of items to skip when calling a paginated API
   * @param {module:api/AuditOperationsApi~getChannelTimelineCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ChannelTimelineEntry>}
   */


  _createClass(AuditOperationsApi, [{
    key: "getChannelTimeline",
    value: function getChannelTimeline(channelId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelId' is set

      if (channelId === undefined || channelId === null) {
        throw new Error("Missing the required parameter 'channelId' when calling getChannelTimeline");
      }

      var pathParams = {
        'channel-id': channelId
      };
      var queryParams = {
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = [_ChannelTimelineEntry["default"]];
      return this.apiClient.callApi('/v2/channels/{channel-id}/timeline', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuditOperationsApi;
}();

exports["default"] = AuditOperationsApi;