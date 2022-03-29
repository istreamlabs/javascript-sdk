"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelTranscodeAudioEncoders = _interopRequireDefault(require("./ChannelTranscodeAudioEncoders"));

var _ChannelTranscodeSegmenter = _interopRequireDefault(require("./ChannelTranscodeSegmenter"));

var _ChannelTranscodeThumbnailEncoders = _interopRequireDefault(require("./ChannelTranscodeThumbnailEncoders"));

var _ChannelTranscodeVideoEncoders = _interopRequireDefault(require("./ChannelTranscodeVideoEncoders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelTranscode model module.
 * @module model/ChannelTranscode
 * @version 0.0.0
 */
var ChannelTranscode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscode</code>.
   * Transcode configures audio/video conversion settings.
   * @alias module:model/ChannelTranscode
   */
  function ChannelTranscode() {
    _classCallCheck(this, ChannelTranscode);

    ChannelTranscode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscode} obj Optional instance to populate.
     * @return {module:model/ChannelTranscode} The populated <code>ChannelTranscode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscode();

        if (data.hasOwnProperty('audio_encoders')) {
          obj['audio_encoders'] = _ApiClient["default"].convertToType(data['audio_encoders'], [_ChannelTranscodeAudioEncoders["default"]]);
        }

        if (data.hasOwnProperty('feature_flags')) {
          obj['feature_flags'] = _ApiClient["default"].convertToType(data['feature_flags'], ['String']);
        }

        if (data.hasOwnProperty('id3_mode')) {
          obj['id3_mode'] = _ApiClient["default"].convertToType(data['id3_mode'], 'String');
        }

        if (data.hasOwnProperty('resize_mode')) {
          obj['resize_mode'] = _ApiClient["default"].convertToType(data['resize_mode'], 'String');
        }

        if (data.hasOwnProperty('segmenter')) {
          obj['segmenter'] = _ChannelTranscodeSegmenter["default"].constructFromObject(data['segmenter']);
        }

        if (data.hasOwnProperty('thumbnail_encoders')) {
          obj['thumbnail_encoders'] = _ApiClient["default"].convertToType(data['thumbnail_encoders'], [_ChannelTranscodeThumbnailEncoders["default"]]);
        }

        if (data.hasOwnProperty('video_encoders')) {
          obj['video_encoders'] = _ApiClient["default"].convertToType(data['video_encoders'], [_ChannelTranscodeVideoEncoders["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscode;
}();
/**
 * Audio encoders specify audio conversion settings, e.g. channels, samples, codec, bitrate, etc.
 * @member {Array.<module:model/ChannelTranscodeAudioEncoders>} audio_encoders
 */


ChannelTranscode.prototype['audio_encoders'] = undefined;
/**
 * Feature flag strings enable experimental transcode features or functionality that are not yet or never will be promoted to the channeldoc model proper.
 * @member {Array.<String>} feature_flags
 */

ChannelTranscode.prototype['feature_flags'] = undefined;
/**
 * Specify how to process ID3 tags from the input source. If not specified, ID3 tags in the source will be ignored.
 * @member {module:model/ChannelTranscode.Id3ModeEnum} id3_mode
 */

ChannelTranscode.prototype['id3_mode'] = undefined;
/**
 * Resize mode specifies how to scale a video up or down to match the output dimensions.
 * @member {module:model/ChannelTranscode.ResizeModeEnum} resize_mode
 */

ChannelTranscode.prototype['resize_mode'] = undefined;
/**
 * @member {module:model/ChannelTranscodeSegmenter} segmenter
 */

ChannelTranscode.prototype['segmenter'] = undefined;
/**
 * Thumbnail encoders specify how to create image snapshots of the video stream.
 * @member {Array.<module:model/ChannelTranscodeThumbnailEncoders>} thumbnail_encoders
 */

ChannelTranscode.prototype['thumbnail_encoders'] = undefined;
/**
 * Video encoders specify video conversion settings, e.g. dimensions, codec, bitrate, etc.
 * @member {Array.<module:model/ChannelTranscodeVideoEncoders>} video_encoders
 */

ChannelTranscode.prototype['video_encoders'] = undefined;
/**
 * Allowed values for the <code>id3_mode</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscode['Id3ModeEnum'] = {
  /**
   * value: "PASSTHROUGH"
   * @const
   */
  "PASSTHROUGH": "PASSTHROUGH"
};
/**
 * Allowed values for the <code>resize_mode</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscode['ResizeModeEnum'] = {
  /**
   * value: "STRETCH"
   * @const
   */
  "STRETCH": "STRETCH",

  /**
   * value: "LETTERBOX"
   * @const
   */
  "LETTERBOX": "LETTERBOX"
};
var _default = ChannelTranscode;
exports["default"] = _default;