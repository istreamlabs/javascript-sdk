"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelTranscodeLoudness = _interopRequireDefault(require("./ChannelTranscodeLoudness"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelTranscodeAudioEncoders model module.
 * @module model/ChannelTranscodeAudioEncoders
 * @version 0.0.0
 */
var ChannelTranscodeAudioEncoders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeAudioEncoders</code>.
   * @alias module:model/ChannelTranscodeAudioEncoders
   */
  function ChannelTranscodeAudioEncoders() {
    _classCallCheck(this, ChannelTranscodeAudioEncoders);

    ChannelTranscodeAudioEncoders.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeAudioEncoders, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeAudioEncoders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeAudioEncoders} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeAudioEncoders} The populated <code>ChannelTranscodeAudioEncoders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeAudioEncoders();

        if (data.hasOwnProperty('audio_source_id')) {
          obj['audio_source_id'] = _ApiClient["default"].convertToType(data['audio_source_id'], 'String');
        }

        if (data.hasOwnProperty('bit_rate')) {
          obj['bit_rate'] = _ApiClient["default"].convertToType(data['bit_rate'], 'Number');
        }

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], 'Number');
        }

        if (data.hasOwnProperty('codec')) {
          obj['codec'] = _ApiClient["default"].convertToType(data['codec'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('loudness')) {
          obj['loudness'] = _ChannelTranscodeLoudness["default"].constructFromObject(data['loudness']);
        }

        if (data.hasOwnProperty('sample_rate')) {
          obj['sample_rate'] = _ApiClient["default"].convertToType(data['sample_rate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeAudioEncoders;
}();
/**
 * Audio source ID specifies which stream within the audio source to use.
 * @member {String} audio_source_id
 */


ChannelTranscodeAudioEncoders.prototype['audio_source_id'] = undefined;
/**
 * Bit rate specifies the constant number of bits used per second. Higher values result in better audio quality but bigger file sizes.
 * @member {Number} bit_rate
 */

ChannelTranscodeAudioEncoders.prototype['bit_rate'] = undefined;
/**
 * Channels specifies the number of audio channels to encode. The available options depend on the audio codec. The encoder supports different channel configurations based on the codec; AAC 1-2 channels, AC3 supports 1-6, and EAC3 supports 1-8. For example, for AC3 5.1 one would set 6 channels. Channel configurations are as follows: 1 - Mono / Dolby 1.0 (C), 2 - Stereo / Dolby 2.0 (L, R), 3 - Dolby 3.0 (L, C, R), 4 - Dolby 4.0 (L, C, R, l), 5 - Dolby 5.0 (L, C, R, l, r), 6 - Dolby 5.1 (L, C, R, l, r, LFE), 7 - Dolby 7.0 (L, C, R, l, r, Lrs, Rrs), 8 - Dolby 7.1 (L, C, R, l, r, Lrs, Rrs, LFE).
 * @member {Number} channels
 */

ChannelTranscodeAudioEncoders.prototype['channels'] = undefined;
/**
 * Codec specifies the audio data encoding format.
 * @member {module:model/ChannelTranscodeAudioEncoders.CodecEnum} codec
 */

ChannelTranscodeAudioEncoders.prototype['codec'] = undefined;
/**
 * Encoder ID. IDs must be unique for all audio encoders. This ID is referenced when setting up playlist publishing.
 * @member {String} id
 */

ChannelTranscodeAudioEncoders.prototype['id'] = undefined;
/**
 * @member {module:model/ChannelTranscodeLoudness} loudness
 */

ChannelTranscodeAudioEncoders.prototype['loudness'] = undefined;
/**
 * Sample rate specifies the number of audio samples in hertz. The available options depend on the audio codec: AAC supports 8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 64000, 88200, and 96000. AC3/EAC3 support only 48000.
 * @member {Number} sample_rate
 */

ChannelTranscodeAudioEncoders.prototype['sample_rate'] = undefined;
/**
 * Allowed values for the <code>codec</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscodeAudioEncoders['CodecEnum'] = {
  /**
   * value: "AAC_LC"
   * @const
   */
  "AAC_LC": "AAC_LC",

  /**
   * value: "AC3"
   * @const
   */
  "AC3": "AC3",

  /**
   * value: "EAC3"
   * @const
   */
  "EAC3": "EAC3"
};
var _default = ChannelTranscodeAudioEncoders;
exports["default"] = _default;