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
 * The ChannelPackagingContentProtectionCommon model module.
 * @module model/ChannelPackagingContentProtectionCommon
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionCommon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionCommon</code>.
   * Only one of [&#39;bulk_file&#39;, &#39;sample_aes&#39;, &#39;common&#39;] may be set.
   * @alias module:model/ChannelPackagingContentProtectionCommon
   */
  function ChannelPackagingContentProtectionCommon() {
    _classCallCheck(this, ChannelPackagingContentProtectionCommon);

    ChannelPackagingContentProtectionCommon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionCommon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionCommon} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionCommon} The populated <code>ChannelPackagingContentProtectionCommon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionCommon();

        if (data.hasOwnProperty('scheme_type')) {
          obj['scheme_type'] = _ApiClient["default"].convertToType(data['scheme_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionCommon;
}();
/**
 * Defines the scheme that can be used with Common Encryption
 * @member {module:model/ChannelPackagingContentProtectionCommon.SchemeTypeEnum} scheme_type
 */


ChannelPackagingContentProtectionCommon.prototype['scheme_type'] = undefined;
/**
 * Allowed values for the <code>scheme_type</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPackagingContentProtectionCommon['SchemeTypeEnum'] = {
  /**
   * value: "CENC"
   * @const
   */
  "CENC": "CENC",

  /**
   * value: "CBCS"
   * @const
   */
  "CBCS": "CBCS"
};
var _default = ChannelPackagingContentProtectionCommon;
exports["default"] = _default;