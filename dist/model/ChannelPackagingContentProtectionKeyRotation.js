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
 * The ChannelPackagingContentProtectionKeyRotation model module.
 * @module model/ChannelPackagingContentProtectionKeyRotation
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionKeyRotation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionKeyRotation</code>.
   * Configures how keys should be rotated
   * @alias module:model/ChannelPackagingContentProtectionKeyRotation
   */
  function ChannelPackagingContentProtectionKeyRotation() {
    _classCallCheck(this, ChannelPackagingContentProtectionKeyRotation);

    ChannelPackagingContentProtectionKeyRotation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionKeyRotation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionKeyRotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionKeyRotation} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionKeyRotation} The populated <code>ChannelPackagingContentProtectionKeyRotation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionKeyRotation();

        if (data.hasOwnProperty('interval_secs')) {
          obj['interval_secs'] = _ApiClient["default"].convertToType(data['interval_secs'], 'Number');
        }

        if (data.hasOwnProperty('program')) {
          obj['program'] = _ApiClient["default"].convertToType(data['program'], 'Boolean');
        }

        if (data.hasOwnProperty('program_overlap_skip_encrypt')) {
          obj['program_overlap_skip_encrypt'] = _ApiClient["default"].convertToType(data['program_overlap_skip_encrypt'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionKeyRotation;
}();
/**
 * Rotate keys based on the specified time interval. If Program is also provided then this time interval will only apply to media segments that are outside of program boundaries. If Program is NOT provided then only this time interval will be used to decided when to rotate keys.
 * @member {Number} interval_secs
 */


ChannelPackagingContentProtectionKeyRotation.prototype['interval_secs'] = undefined;
/**
 * Rotate keys on (SCTE35) program boundaries such that no two programs will be protected with the same key.
 * @member {Boolean} program
 */

ChannelPackagingContentProtectionKeyRotation.prototype['program'] = undefined;
/**
 * Do not encrypt segments that are part of more than one SCTE-35 program.
 * @member {Boolean} program_overlap_skip_encrypt
 */

ChannelPackagingContentProtectionKeyRotation.prototype['program_overlap_skip_encrypt'] = undefined;
var _default = ChannelPackagingContentProtectionKeyRotation;
exports["default"] = _default;