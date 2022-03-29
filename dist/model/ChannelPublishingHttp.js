"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPackagingContentProtectionSimpleBasicAuth = _interopRequireDefault(require("./ChannelPackagingContentProtectionSimpleBasicAuth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPublishingHttp model module.
 * @module model/ChannelPublishingHttp
 * @version 0.0.0
 */
var ChannelPublishingHttp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingHttp</code>.
   * HTTP destination where media segments and playlists will be published.
   * @alias module:model/ChannelPublishingHttp
   */
  function ChannelPublishingHttp() {
    _classCallCheck(this, ChannelPublishingHttp);

    ChannelPublishingHttp.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingHttp, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingHttp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingHttp} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingHttp} The populated <code>ChannelPublishingHttp</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingHttp();

        if (data.hasOwnProperty('basic_auth')) {
          obj['basic_auth'] = _ChannelPackagingContentProtectionSimpleBasicAuth["default"].constructFromObject(data['basic_auth']);
        }

        if (data.hasOwnProperty('compression')) {
          obj['compression'] = _ApiClient["default"].convertToType(data['compression'], 'String');
        }

        if (data.hasOwnProperty('cross_playback_paths')) {
          obj['cross_playback_paths'] = _ApiClient["default"].convertToType(data['cross_playback_paths'], ['String']);
        }

        if (data.hasOwnProperty('do_not_monitor')) {
          obj['do_not_monitor'] = _ApiClient["default"].convertToType(data['do_not_monitor'], 'Boolean');
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('playback_base_url')) {
          obj['playback_base_url'] = _ApiClient["default"].convertToType(data['playback_base_url'], 'String');
        }

        if (data.hasOwnProperty('playback_query_params')) {
          obj['playback_query_params'] = _ApiClient["default"].convertToType(data['playback_query_params'], 'String');
        }

        if (data.hasOwnProperty('publish_base_url')) {
          obj['publish_base_url'] = _ApiClient["default"].convertToType(data['publish_base_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingHttp;
}();
/**
 * @member {module:model/ChannelPackagingContentProtectionSimpleBasicAuth} basic_auth
 */


ChannelPublishingHttp.prototype['basic_auth'] = undefined;
/**
 * Configures whether or not (and how) to compress manifests being published to the origin. If not specified, manifests will not be compressed.
 * @member {module:model/ChannelPublishingHttp.CompressionEnum} compression
 */

ChannelPublishingHttp.prototype['compression'] = undefined;
/**
 * Cross Playback Paths are playback paths that reference alternative content. These playback paths could reference publish points from the same publication or a completely different encoder and packager altogether. Content published to an endpoint referenced by one of these cross playback paths MUST be of the same Manifest.Type.
 * @member {Array.<String>} cross_playback_paths
 */

ChannelPublishingHttp.prototype['cross_playback_paths'] = undefined;
/**
 * (Optional) Specifies if this pubpoint should not be monitored by PLM.
 * @member {Boolean} do_not_monitor
 */

ChannelPublishingHttp.prototype['do_not_monitor'] = undefined;
/**
 * Allows custom HTTP headers to be set via configuration for all HTTP requests.
 * @member {Object.<String, String>} headers
 */

ChannelPublishingHttp.prototype['headers'] = undefined;
/**
 * Method overrides what HTTP method to specify in requests to the Publish Point. If not specified the service will default to POST.
 * @member {String} method
 */

ChannelPublishingHttp.prototype['method'] = undefined;
/**
 * The base URL where published playlists will be able to be obtained. This is often different than the publish_base_url for CDN publishing workflows.
 * @member {String} playback_base_url
 */

ChannelPublishingHttp.prototype['playback_base_url'] = undefined;
/**
 * Specifies any query parameters that will be added to playback urls. Should not include the initial '?' Example: 'foo=bar&q=golang'
 * @member {String} playback_query_params
 */

ChannelPublishingHttp.prototype['playback_query_params'] = undefined;
/**
 * The base URL where generated playlists will be sent/published. Each publish point requires a unique 'publish_base_url'.
 * @member {String} publish_base_url
 */

ChannelPublishingHttp.prototype['publish_base_url'] = undefined;
/**
 * Allowed values for the <code>compression</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingHttp['CompressionEnum'] = {
  /**
   * value: "NONE"
   * @const
   */
  "NONE": "NONE",

  /**
   * value: "GZIP"
   * @const
   */
  "GZIP": "GZIP"
};
var _default = ChannelPublishingHttp;
exports["default"] = _default;