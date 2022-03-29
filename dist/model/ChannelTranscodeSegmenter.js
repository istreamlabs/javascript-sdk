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
 * The ChannelTranscodeSegmenter model module.
 * @module model/ChannelTranscodeSegmenter
 * @version 0.0.0
 */
var ChannelTranscodeSegmenter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeSegmenter</code>.
   * Segmenter configures how video GOPs and segments get generated.
   * @alias module:model/ChannelTranscodeSegmenter
   */
  function ChannelTranscodeSegmenter() {
    _classCallCheck(this, ChannelTranscodeSegmenter);

    ChannelTranscodeSegmenter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeSegmenter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeSegmenter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeSegmenter} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeSegmenter} The populated <code>ChannelTranscodeSegmenter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeSegmenter();

        if (data.hasOwnProperty('gop_duration_secs')) {
          obj['gop_duration_secs'] = _ApiClient["default"].convertToType(data['gop_duration_secs'], 'Number');
        }

        if (data.hasOwnProperty('partials_mode')) {
          obj['partials_mode'] = _ApiClient["default"].convertToType(data['partials_mode'], 'String');
        }

        if (data.hasOwnProperty('segment_duration_secs')) {
          obj['segment_duration_secs'] = _ApiClient["default"].convertToType(data['segment_duration_secs'], 'Number');
        }

        if (data.hasOwnProperty('temi')) {
          obj['temi'] = _ApiClient["default"].convertToType(data['temi'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeSegmenter;
}();
/**
 * GOP (group of pictures) duration specifies the amount of time between I-frames. Shorter durations can lower quality slightly as each I-frame uses more bits than P- & B-frames but can provide a better seeking experience when enabling thumbnail encoders and/or I-Frame Only playlists.
 * @member {Number} gop_duration_secs
 */


ChannelTranscodeSegmenter.prototype['gop_duration_secs'] = undefined;
/**
 * Not public because we haven't shipped low latency HLS yet and we probably need to update the naming.
 * @member {module:model/ChannelTranscodeSegmenter.PartialsModeEnum} partials_mode
 */

ChannelTranscodeSegmenter.prototype['partials_mode'] = undefined;
/**
 * Segment duration specifies the target duration of a single segment. Segments shorter than this duration can occur at signaling boundaries. This value _must_ be a multiple of the GOP duration value.
 * @member {Number} segment_duration_secs
 */

ChannelTranscodeSegmenter.prototype['segment_duration_secs'] = undefined;
/**
 * Include TEMI (Timeline and External Media Information ISO/IEC 13818-1:2019 Annex U) to mpeg-ts segments.
 * @member {Boolean} temi
 */

ChannelTranscodeSegmenter.prototype['temi'] = undefined;
/**
 * Allowed values for the <code>partials_mode</code> property.
 * @enum {String}
 * @readonly
 */

ChannelTranscodeSegmenter['PartialsModeEnum'] = {
  /**
   * value: "GOP"
   * @const
   */
  "GOP": "GOP"
};
var _default = ChannelTranscodeSegmenter;
exports["default"] = _default;