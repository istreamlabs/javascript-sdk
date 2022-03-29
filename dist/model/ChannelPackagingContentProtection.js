"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPackagingContentProtectionAtlas = _interopRequireDefault(require("./ChannelPackagingContentProtectionAtlas"));

var _ChannelPackagingContentProtectionBulkFile = _interopRequireDefault(require("./ChannelPackagingContentProtectionBulkFile"));

var _ChannelPackagingContentProtectionCommon = _interopRequireDefault(require("./ChannelPackagingContentProtectionCommon"));

var _ChannelPackagingContentProtectionCpix = _interopRequireDefault(require("./ChannelPackagingContentProtectionCpix"));

var _ChannelPackagingContentProtectionKeyRotation = _interopRequireDefault(require("./ChannelPackagingContentProtectionKeyRotation"));

var _ChannelPackagingContentProtectionSimple = _interopRequireDefault(require("./ChannelPackagingContentProtectionSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPackagingContentProtection model module.
 * @module model/ChannelPackagingContentProtection
 * @version 0.0.0
 */
var ChannelPackagingContentProtection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtection</code>.
   * Configures how to protect packaged media segments.
   * @alias module:model/ChannelPackagingContentProtection
   */
  function ChannelPackagingContentProtection() {
    _classCallCheck(this, ChannelPackagingContentProtection);

    ChannelPackagingContentProtection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtection} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtection} The populated <code>ChannelPackagingContentProtection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtection();

        if (data.hasOwnProperty('atlas')) {
          obj['atlas'] = _ChannelPackagingContentProtectionAtlas["default"].constructFromObject(data['atlas']);
        }

        if (data.hasOwnProperty('bulk_file')) {
          obj['bulk_file'] = _ChannelPackagingContentProtectionBulkFile["default"].constructFromObject(data['bulk_file']);
        }

        if (data.hasOwnProperty('common')) {
          obj['common'] = _ChannelPackagingContentProtectionCommon["default"].constructFromObject(data['common']);
        }

        if (data.hasOwnProperty('cpix')) {
          obj['cpix'] = _ChannelPackagingContentProtectionCpix["default"].constructFromObject(data['cpix']);
        }

        if (data.hasOwnProperty('key_rotation')) {
          obj['key_rotation'] = _ChannelPackagingContentProtectionKeyRotation["default"].constructFromObject(data['key_rotation']);
        }

        if (data.hasOwnProperty('sample_aes')) {
          obj['sample_aes'] = _ApiClient["default"].convertToType(data['sample_aes'], Object);
        }

        if (data.hasOwnProperty('simple')) {
          obj['simple'] = _ChannelPackagingContentProtectionSimple["default"].constructFromObject(data['simple']);
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtection;
}();
/**
 * @member {module:model/ChannelPackagingContentProtectionAtlas} atlas
 */


ChannelPackagingContentProtection.prototype['atlas'] = undefined;
/**
 * @member {module:model/ChannelPackagingContentProtectionBulkFile} bulk_file
 */

ChannelPackagingContentProtection.prototype['bulk_file'] = undefined;
/**
 * @member {module:model/ChannelPackagingContentProtectionCommon} common
 */

ChannelPackagingContentProtection.prototype['common'] = undefined;
/**
 * @member {module:model/ChannelPackagingContentProtectionCpix} cpix
 */

ChannelPackagingContentProtection.prototype['cpix'] = undefined;
/**
 * @member {module:model/ChannelPackagingContentProtectionKeyRotation} key_rotation
 */

ChannelPackagingContentProtection.prototype['key_rotation'] = undefined;
/**
 * Only one of ['bulk_file', 'sample_aes', 'common'] may be set.
 * @member {Object} sample_aes
 */

ChannelPackagingContentProtection.prototype['sample_aes'] = undefined;
/**
 * @member {module:model/ChannelPackagingContentProtectionSimple} simple
 */

ChannelPackagingContentProtection.prototype['simple'] = undefined;
var _default = ChannelPackagingContentProtection;
exports["default"] = _default;