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
 * The ChannelTranscodeH265 model module.
 * @module model/ChannelTranscodeH265
 * @version 0.0.0
 */
var ChannelTranscodeH265 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeH265</code>.
   * Configure the encoder to use the H.265 codec. Only one of [&#39;H264Settings&#39;, &#39;H265Settings&#39;] may be set
   * @alias module:model/ChannelTranscodeH265
   */
  function ChannelTranscodeH265() {
    _classCallCheck(this, ChannelTranscodeH265);

    ChannelTranscodeH265.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeH265, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeH265</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeH265} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeH265} The populated <code>ChannelTranscodeH265</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeH265();

        if (data.hasOwnProperty('hdr')) {
          obj['hdr'] = _ApiClient["default"].convertToType(data['hdr'], Object);
        }

        if (data.hasOwnProperty('profile')) {
          obj['profile'] = _ApiClient["default"].convertToType(data['profile'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeH265;
}();
/**
 * Configure the HDR settings.
 * @member {Object} hdr
 */


ChannelTranscodeH265.prototype['hdr'] = undefined;
/**
 * H.265 video profile, which defines various encoder features and settings. See https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding#Profiles for details.
 * @member {module:model/ChannelTranscodeH265.ProfileEnum} profile
 */

ChannelTranscodeH265.prototype['profile'] = undefined;
/**
 * Allowed values for the <code>profile</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscodeH265['ProfileEnum'] = {
  /**
   * value: "MAIN"
   * @const
   */
  "MAIN": "MAIN",

  /**
   * value: "MAIN_10"
   * @const
   */
  "MAIN_10": "MAIN_10"
};
var _default = ChannelTranscodeH265;
exports["default"] = _default;