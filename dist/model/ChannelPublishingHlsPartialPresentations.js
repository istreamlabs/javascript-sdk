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
 * The ChannelPublishingHlsPartialPresentations model module.
 * @module model/ChannelPublishingHlsPartialPresentations
 * @version 0.0.0
 */
var ChannelPublishingHlsPartialPresentations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingHlsPartialPresentations</code>.
   * @alias module:model/ChannelPublishingHlsPartialPresentations
   */
  function ChannelPublishingHlsPartialPresentations() {
    _classCallCheck(this, ChannelPublishingHlsPartialPresentations);

    ChannelPublishingHlsPartialPresentations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingHlsPartialPresentations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingHlsPartialPresentations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingHlsPartialPresentations} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingHlsPartialPresentations} The populated <code>ChannelPublishingHlsPartialPresentations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingHlsPartialPresentations();

        if (data.hasOwnProperty('audio_encoder_ids')) {
          obj['audio_encoder_ids'] = _ApiClient["default"].convertToType(data['audio_encoder_ids'], ['String']);
        }

        if (data.hasOwnProperty('iframe_only_encoder_ids')) {
          obj['iframe_only_encoder_ids'] = _ApiClient["default"].convertToType(data['iframe_only_encoder_ids'], ['String']);
        }

        if (data.hasOwnProperty('playlist_path')) {
          obj['playlist_path'] = _ApiClient["default"].convertToType(data['playlist_path'], 'String');
        }

        if (data.hasOwnProperty('thumbnail_encoder_ids')) {
          obj['thumbnail_encoder_ids'] = _ApiClient["default"].convertToType(data['thumbnail_encoder_ids'], ['String']);
        }

        if (data.hasOwnProperty('video_encoder_ids')) {
          obj['video_encoder_ids'] = _ApiClient["default"].convertToType(data['video_encoder_ids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingHlsPartialPresentations;
}();
/**
 * Specify which audio encoders should be used for this presentation. If none are specified, all audio encoders configured for the parent Publication will be used.
 * @member {Array.<String>} audio_encoder_ids
 */


ChannelPublishingHlsPartialPresentations.prototype['audio_encoder_ids'] = undefined;
/**
 * List of video encoder IDs that should have I-Frame only playlists generated for them.
 * @member {Array.<String>} iframe_only_encoder_ids
 */

ChannelPublishingHlsPartialPresentations.prototype['iframe_only_encoder_ids'] = undefined;
/**
 * Sub-path that will be appended onto the publish and playback base URLs of HTTP PublishPoints for published playlist files.
 * @member {String} playlist_path
 */

ChannelPublishingHlsPartialPresentations.prototype['playlist_path'] = undefined;
/**
 * Specify which thumbnail encoders should be used for this presentation. If none are specified, all thumbnail encoders configured for the parent Publication will be used.
 * @member {Array.<String>} thumbnail_encoder_ids
 */

ChannelPublishingHlsPartialPresentations.prototype['thumbnail_encoder_ids'] = undefined;
/**
 * Specify which video encoders should be used for this presentation. If none are specified, all video encoders configured for the parent Publication will be used.
 * @member {Array.<String>} video_encoder_ids
 */

ChannelPublishingHlsPartialPresentations.prototype['video_encoder_ids'] = undefined;
var _default = ChannelPublishingHlsPartialPresentations;
exports["default"] = _default;