"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPlaybackContentProtection = _interopRequireDefault(require("./ChannelPlaybackContentProtection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPlaybackCmaf model module.
 * @module model/ChannelPlaybackCmaf
 * @version 0.0.0
 */
var ChannelPlaybackCmaf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPlaybackCmaf</code>.
   * @alias module:model/ChannelPlaybackCmaf
   * @param url {String} Playback URL
   */
  function ChannelPlaybackCmaf(url) {
    _classCallCheck(this, ChannelPlaybackCmaf);

    ChannelPlaybackCmaf.initialize(this, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPlaybackCmaf, null, [{
    key: "initialize",
    value: function initialize(obj, url) {
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ChannelPlaybackCmaf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPlaybackCmaf} obj Optional instance to populate.
     * @return {module:model/ChannelPlaybackCmaf} The populated <code>ChannelPlaybackCmaf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPlaybackCmaf();

        if (data.hasOwnProperty('content_protection')) {
          obj['content_protection'] = _ChannelPlaybackContentProtection["default"].constructFromObject(data['content_protection']);
        }

        if (data.hasOwnProperty('partial_presentations')) {
          obj['partial_presentations'] = _ApiClient["default"].convertToType(data['partial_presentations'], ['String']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPlaybackCmaf;
}();
/**
 * @member {module:model/ChannelPlaybackContentProtection} content_protection
 */


ChannelPlaybackCmaf.prototype['content_protection'] = undefined;
/**
 * Partial Presentation Playback URLs
 * @member {Array.<String>} partial_presentations
 */

ChannelPlaybackCmaf.prototype['partial_presentations'] = undefined;
/**
 * Playback URL
 * @member {String} url
 */

ChannelPlaybackCmaf.prototype['url'] = undefined;
var _default = ChannelPlaybackCmaf;
exports["default"] = _default;