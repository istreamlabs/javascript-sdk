"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorModel = _interopRequireDefault(require("../model/ErrorModel"));

var _Source = _interopRequireDefault(require("../model/Source"));

var _Summary = _interopRequireDefault(require("../model/Summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Sources service.
* @module api/SourcesApi
* @version 0.0.0
*/
var SourcesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SourcesApi. 
  * @alias module:api/SourcesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SourcesApi(apiClient) {
    _classCallCheck(this, SourcesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getSource operation.
   * @callback module:api/SourcesApi~getSourceCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Source} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Source
   * Get a source's configuration
   * @param {String} sourceId Unique source identifier
   * @param {module:api/SourcesApi~getSourceCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Source}
   */


  _createClass(SourcesApi, [{
    key: "getSource",
    value: function getSource(sourceId, callback) {
      var postBody = null; // verify the required parameter 'sourceId' is set

      if (sourceId === undefined || sourceId === null) {
        throw new Error("Missing the required parameter 'sourceId' when calling getSource");
      }

      var pathParams = {
        'source-id': sourceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = _Source["default"];
      return this.apiClient.callApi('/v2/sources/{source-id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listSources operation.
     * @callback module:api/SourcesApi~listSourcesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Summary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Sources
     * Get a list of sources that are used to create channels.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor Current page cursor
     * @param {Number} opts.pageSize Number of items to return (default to 100)
     * @param {module:api/SourcesApi~listSourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Summary>}
     */

  }, {
    key: "listSources",
    value: function listSources(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'cursor': opts['cursor'],
        'page_size': opts['pageSize']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['authcode', 'm2m'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/problem+json'];
      var returnType = [_Summary["default"]];
      return this.apiClient.callApi('/v2/sources', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SourcesApi;
}();

exports["default"] = SourcesApi;