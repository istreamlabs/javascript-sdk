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
 * The ChannelTranscodeLoudness model module.
 * @module model/ChannelTranscodeLoudness
 * @version 0.0.0
 */
var ChannelTranscodeLoudness = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeLoudness</code>.
   * Loudness normalization settings.
   * @alias module:model/ChannelTranscodeLoudness
   */
  function ChannelTranscodeLoudness() {
    _classCallCheck(this, ChannelTranscodeLoudness);

    ChannelTranscodeLoudness.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeLoudness, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeLoudness</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeLoudness} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeLoudness} The populated <code>ChannelTranscodeLoudness</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeLoudness();

        if (data.hasOwnProperty('dialog_intel')) {
          obj['dialog_intel'] = _ApiClient["default"].convertToType(data['dialog_intel'], 'Boolean');
        }

        if (data.hasOwnProperty('lkfs')) {
          obj['lkfs'] = _ApiClient["default"].convertToType(data['lkfs'], 'Number');
        }

        if (data.hasOwnProperty('lra')) {
          obj['lra'] = _ApiClient["default"].convertToType(data['lra'], 'Number');
        }

        if (data.hasOwnProperty('peak_limit')) {
          obj['peak_limit'] = _ApiClient["default"].convertToType(data['peak_limit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeLoudness;
}();
/**
 * Enable Dialog Intelligence. Only supported for (E)AC-3 encoders.
 * @member {Boolean} dialog_intel
 */


ChannelTranscodeLoudness.prototype['dialog_intel'] = undefined;
/**
 * Loudness normalization LKFS setting. Default value is -24.
 * @member {Number} lkfs
 */

ChannelTranscodeLoudness.prototype['lkfs'] = undefined;
/**
 * Loudness Range. Only supported for non-(E)AC-3 encoders. Default value is 7.0.
 * @member {Number} lra
 */

ChannelTranscodeLoudness.prototype['lra'] = undefined;
/**
 * Peak Limit. Default value is -2.0.
 * @member {Number} peak_limit
 */

ChannelTranscodeLoudness.prototype['peak_limit'] = undefined;
var _default = ChannelTranscodeLoudness;
exports["default"] = _default;