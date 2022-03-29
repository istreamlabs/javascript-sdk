"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPackagingContentProtectionCpix model module.
 * @module model/ChannelPackagingContentProtectionCpix
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionCpix = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionCpix</code>.
   * Only one of [&#39;simple&#39;, &#39;atlas&#39;, &#39;cpix&#39;] may be set.
   * @alias module:model/ChannelPackagingContentProtectionCpix
   */
  function ChannelPackagingContentProtectionCpix() {
    _classCallCheck(this, ChannelPackagingContentProtectionCpix);

    ChannelPackagingContentProtectionCpix.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionCpix, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionCpix</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionCpix} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionCpix} The populated <code>ChannelPackagingContentProtectionCpix</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionCpix();

        if (data.hasOwnProperty('certificates_id')) {
          obj['certificates_id'] = _ApiClient["default"].convertToType(data['certificates_id'], 'String');
        }

        if (data.hasOwnProperty('content_id')) {
          obj['content_id'] = _ApiClient["default"].convertToType(data['content_id'], 'String');
        }

        if (data.hasOwnProperty('credentials_id')) {
          obj['credentials_id'] = _ApiClient["default"].convertToType(data['credentials_id'], 'String');
        }

        if (data.hasOwnProperty('decryption_key_id')) {
          obj['decryption_key_id'] = _ApiClient["default"].convertToType(data['decryption_key_id'], 'String');
        }

        if (data.hasOwnProperty('drms')) {
          obj['drms'] = _ApiClient["default"].convertToType(data['drms'], ['String']);
        }

        if (data.hasOwnProperty('headers_id')) {
          obj['headers_id'] = _ApiClient["default"].convertToType(data['headers_id'], 'String');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionCpix;
}();
/**
 * Unique ID used for certificate settings, unique per distributor.
 * @member {String} certificates_id
 */


ChannelPackagingContentProtectionCpix.prototype['certificates_id'] = undefined;
/**
 * (Optional) Content ID that identifies this channel in the CPIX service. Value is defined by the DRM system owner, and if defined will be included as part of a POST request.
 * @member {String} content_id
 */

ChannelPackagingContentProtectionCpix.prototype['content_id'] = undefined;
/**
 * Unique ID used for credentials settings, unique per distributor.
 * @member {String} credentials_id
 */

ChannelPackagingContentProtectionCpix.prototype['credentials_id'] = undefined;
/**
 * Unique ID of the decryption key to use in case the server response contains content keys encrypted. The key is unique per distirutor, and configured ahead of time by the publishing team and the CPIX service owner.
 * @member {String} decryption_key_id
 */

ChannelPackagingContentProtectionCpix.prototype['decryption_key_id'] = undefined;
/**
 * (Optional) DRM system keys to request. If not defined a GET request will be done, and any key returned will be handled. If defined, random kid(s) (key ids) will be generated on rotation for each DRM system, and a POST request will be done to create them.
 * @member {Array.<module:model/ChannelPackagingContentProtectionCpix.DrmsEnum>} drms
 */

ChannelPackagingContentProtectionCpix.prototype['drms'] = undefined;
/**
 * (Optional) An identifier to a list of HTTP headers to be added to the request sent to the CPIX service.
 * @member {String} headers_id
 */

ChannelPackagingContentProtectionCpix.prototype['headers_id'] = undefined;
/**
 * CPIX service URI
 * @member {String} uri
 */

ChannelPackagingContentProtectionCpix.prototype['uri'] = undefined;
/**
 * Allowed values for the <code>drms</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPackagingContentProtectionCpix['DrmsEnum'] = {
  /**
   * value: "WIDEVINE"
   * @const
   */
  "WIDEVINE": "WIDEVINE",

  /**
   * value: "FAIRPLAY"
   * @const
   */
  "FAIRPLAY": "FAIRPLAY",

  /**
   * value: "PRIMETIME"
   * @const
   */
  "PRIMETIME": "PRIMETIME",

  /**
   * value: "PLAYREADY"
   * @const
   */
  "PLAYREADY": "PLAYREADY"
};
var _default = ChannelPackagingContentProtectionCpix;
exports["default"] = _default;