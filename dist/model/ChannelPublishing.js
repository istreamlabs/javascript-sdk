"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPublishingClosedCaptionStreams = _interopRequireDefault(require("./ChannelPublishingClosedCaptionStreams"));

var _ChannelPublishingLive2vod = _interopRequireDefault(require("./ChannelPublishingLive2vod"));

var _ChannelPublishingPublications = _interopRequireDefault(require("./ChannelPublishingPublications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPublishing model module.
 * @module model/ChannelPublishing
 * @version 0.0.0
 */
var ChannelPublishing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishing</code>.
   * Publishing configures playlist formats and where to send video and playlist data.
   * @alias module:model/ChannelPublishing
   */
  function ChannelPublishing() {
    _classCallCheck(this, ChannelPublishing);

    ChannelPublishing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishing} obj Optional instance to populate.
     * @return {module:model/ChannelPublishing} The populated <code>ChannelPublishing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishing();

        if (data.hasOwnProperty('closed_caption_streams')) {
          obj['closed_caption_streams'] = _ApiClient["default"].convertToType(data['closed_caption_streams'], [_ChannelPublishingClosedCaptionStreams["default"]]);
        }

        if (data.hasOwnProperty('feature_flags')) {
          obj['feature_flags'] = _ApiClient["default"].convertToType(data['feature_flags'], ['String']);
        }

        if (data.hasOwnProperty('live2vod')) {
          obj['live2vod'] = _ChannelPublishingLive2vod["default"].constructFromObject(data['live2vod']);
        }

        if (data.hasOwnProperty('publications')) {
          obj['publications'] = _ApiClient["default"].convertToType(data['publications'], [_ChannelPublishingPublications["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishing;
}();
/**
 * Configures how captioning information is published.
 * @member {Array.<module:model/ChannelPublishingClosedCaptionStreams>} closed_caption_streams
 */


ChannelPublishing.prototype['closed_caption_streams'] = undefined;
/**
 * Set of string identifiers corresponding to features that this Channel is opting in.
 * @member {Array.<String>} feature_flags
 */

ChannelPublishing.prototype['feature_flags'] = undefined;
/**
 * @member {module:model/ChannelPublishingLive2vod} live2vod
 */

ChannelPublishing.prototype['live2vod'] = undefined;
/**
 * A set of individual configurations that each can configure a specific destination and mechanism of delivery for segments and/or playlists.
 * @member {Array.<module:model/ChannelPublishingPublications>} publications
 */

ChannelPublishing.prototype['publications'] = undefined;
var _default = ChannelPublishing;
exports["default"] = _default;