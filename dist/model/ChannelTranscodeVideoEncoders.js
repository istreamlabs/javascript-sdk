"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelTranscodeH = _interopRequireDefault(require("./ChannelTranscodeH264"));

var _ChannelTranscodeH2 = _interopRequireDefault(require("./ChannelTranscodeH265"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelTranscodeVideoEncoders model module.
 * @module model/ChannelTranscodeVideoEncoders
 * @version 0.0.0
 */
var ChannelTranscodeVideoEncoders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeVideoEncoders</code>.
   * @alias module:model/ChannelTranscodeVideoEncoders
   */
  function ChannelTranscodeVideoEncoders() {
    _classCallCheck(this, ChannelTranscodeVideoEncoders);

    ChannelTranscodeVideoEncoders.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeVideoEncoders, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeVideoEncoders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeVideoEncoders} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeVideoEncoders} The populated <code>ChannelTranscodeVideoEncoders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeVideoEncoders();

        if (data.hasOwnProperty('bit_rate')) {
          obj['bit_rate'] = _ApiClient["default"].convertToType(data['bit_rate'], 'Number');
        }

        if (data.hasOwnProperty('frame_rate')) {
          obj['frame_rate'] = _ApiClient["default"].convertToType(data['frame_rate'], 'String');
        }

        if (data.hasOwnProperty('h264')) {
          obj['h264'] = _ChannelTranscodeH["default"].constructFromObject(data['h264']);
        }

        if (data.hasOwnProperty('h265')) {
          obj['h265'] = _ChannelTranscodeH2["default"].constructFromObject(data['h265']);
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeVideoEncoders;
}();
/**
 * Bit rate specifies the number in bits used per second. Higher values result in better video quality but bigger file sizes. For H.264 this value is the target of the constrained variable bit rate.
 * @member {Number} bit_rate
 */


ChannelTranscodeVideoEncoders.prototype['bit_rate'] = undefined;
/**
 * Frame rate specifies the number of images that are shown per second when playing back the video. For the best quality playback, this should match or be a multiple of the input source video stream.
 * @member {module:model/ChannelTranscodeVideoEncoders.FrameRateEnum} frame_rate
 */

ChannelTranscodeVideoEncoders.prototype['frame_rate'] = undefined;
/**
 * @member {module:model/ChannelTranscodeH264} h264
 */

ChannelTranscodeVideoEncoders.prototype['h264'] = undefined;
/**
 * @member {module:model/ChannelTranscodeH265} h265
 */

ChannelTranscodeVideoEncoders.prototype['h265'] = undefined;
/**
 * Height specifies the video height in pixels. Must be a multiple of two.
 * @member {Number} height
 */

ChannelTranscodeVideoEncoders.prototype['height'] = undefined;
/**
 * Encoder ID. IDs must be unique for all video and thumbnail encoders. This ID is referenced when setting up playlist publishing.
 * @member {String} id
 */

ChannelTranscodeVideoEncoders.prototype['id'] = undefined;
/**
 * Width specifies the video width in pixels. Must be a multiple of two.
 * @member {Number} width
 */

ChannelTranscodeVideoEncoders.prototype['width'] = undefined;
/**
 * Allowed values for the <code>frame_rate</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscodeVideoEncoders['FrameRateEnum'] = {
  /**
   * value: "FR_23_98"
   * @const
   */
  "23_98": "FR_23_98",

  /**
   * value: "FR_24"
   * @const
   */
  "24": "FR_24",

  /**
   * value: "FR_25"
   * @const
   */
  "25": "FR_25",

  /**
   * value: "FR_29_97"
   * @const
   */
  "29_97": "FR_29_97",

  /**
   * value: "FR_30"
   * @const
   */
  "30": "FR_30",

  /**
   * value: "FR_50"
   * @const
   */
  "50": "FR_50",

  /**
   * value: "FR_59_94"
   * @const
   */
  "59_94": "FR_59_94",

  /**
   * value: "FR_60"
   * @const
   */
  "60": "FR_60"
};
var _default = ChannelTranscodeVideoEncoders;
exports["default"] = _default;