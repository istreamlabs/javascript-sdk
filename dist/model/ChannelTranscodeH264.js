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
 * The ChannelTranscodeH264 model module.
 * @module model/ChannelTranscodeH264
 * @version 0.0.0
 */
var ChannelTranscodeH264 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeH264</code>.
   * Configure the encoder to use the H.264 codec. Only one of [&#39;H264Settings&#39;, &#39;H265Settings&#39;] may be set
   * @alias module:model/ChannelTranscodeH264
   */
  function ChannelTranscodeH264() {
    _classCallCheck(this, ChannelTranscodeH264);

    ChannelTranscodeH264.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeH264, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeH264</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeH264} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeH264} The populated <code>ChannelTranscodeH264</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeH264();

        if (data.hasOwnProperty('profile')) {
          obj['profile'] = _ApiClient["default"].convertToType(data['profile'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeH264;
}();
/**
 * H.264 video profile, which defines various encoder features and settings. See https://en.wikipedia.org/wiki/Advanced_Video_Coding#Profiles for details.
 * @member {module:model/ChannelTranscodeH264.ProfileEnum} profile
 */


ChannelTranscodeH264.prototype['profile'] = undefined;
/**
 * Allowed values for the <code>profile</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscodeH264['ProfileEnum'] = {
  /**
   * value: "BASELINE"
   * @const
   */
  "BASELINE": "BASELINE",

  /**
   * value: "MAIN"
   * @const
   */
  "MAIN": "MAIN",

  /**
   * value: "HIGH"
   * @const
   */
  "HIGH": "HIGH",

  /**
   * value: "HIGH_10"
   * @const
   */
  "HIGH_10": "HIGH_10",

  /**
   * value: "HIGH_422"
   * @const
   */
  "HIGH_422": "HIGH_422"
};
var _default = ChannelTranscodeH264;
exports["default"] = _default;