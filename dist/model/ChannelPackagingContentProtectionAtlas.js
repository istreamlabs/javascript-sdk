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
 * The ChannelPackagingContentProtectionAtlas model module.
 * @module model/ChannelPackagingContentProtectionAtlas
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionAtlas = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionAtlas</code>.
   * Only one of [&#39;simple&#39;, &#39;atlas&#39;, &#39;cpix&#39;] may be set.
   * @alias module:model/ChannelPackagingContentProtectionAtlas
   */
  function ChannelPackagingContentProtectionAtlas() {
    _classCallCheck(this, ChannelPackagingContentProtectionAtlas);

    ChannelPackagingContentProtectionAtlas.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionAtlas, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionAtlas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionAtlas} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionAtlas} The populated <code>ChannelPackagingContentProtectionAtlas</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionAtlas();

        if (data.hasOwnProperty('asset_id')) {
          obj['asset_id'] = _ApiClient["default"].convertToType(data['asset_id'], 'String');
        }

        if (data.hasOwnProperty('company_id')) {
          obj['company_id'] = _ApiClient["default"].convertToType(data['company_id'], 'String');
        }

        if (data.hasOwnProperty('drms')) {
          obj['drms'] = _ApiClient["default"].convertToType(data['drms'], ['String']);
        }

        if (data.hasOwnProperty('widevine_v0_pssh_box')) {
          obj['widevine_v0_pssh_box'] = _ApiClient["default"].convertToType(data['widevine_v0_pssh_box'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionAtlas;
}();
/**
 * The Asset Identifier which was taken from the token entitlement service request.
 * @member {String} asset_id
 */


ChannelPackagingContentProtectionAtlas.prototype['asset_id'] = undefined;
/**
 * The Identifier of the Company that this token belongs.
 * @member {String} company_id
 */

ChannelPackagingContentProtectionAtlas.prototype['company_id'] = undefined;
/**
 * DRM system keys to request
 * @member {Array.<module:model/ChannelPackagingContentProtectionAtlas.DrmsEnum>} drms
 */

ChannelPackagingContentProtectionAtlas.prototype['drms'] = undefined;
/**
 * When TRUE the KeyID is not embedded in the pssh box which sets the version to 0. Defaults to generating v1 pssh_boxes that includes the key_id
 * @member {Boolean} widevine_v0_pssh_box
 */

ChannelPackagingContentProtectionAtlas.prototype['widevine_v0_pssh_box'] = undefined;
/**
 * Allowed values for the <code>drms</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPackagingContentProtectionAtlas['DrmsEnum'] = {
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
var _default = ChannelPackagingContentProtectionAtlas;
exports["default"] = _default;