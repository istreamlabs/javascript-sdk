"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPlaybackCmaf = _interopRequireDefault(require("./ChannelPlaybackCmaf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPlayback model module.
 * @module model/ChannelPlayback
 * @version 0.0.0
 */
var ChannelPlayback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPlayback</code>.
   * @alias module:model/ChannelPlayback
   */
  function ChannelPlayback() {
    _classCallCheck(this, ChannelPlayback);

    ChannelPlayback.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPlayback, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPlayback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPlayback} obj Optional instance to populate.
     * @return {module:model/ChannelPlayback} The populated <code>ChannelPlayback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPlayback();

        if (data.hasOwnProperty('cmaf')) {
          obj['cmaf'] = _ApiClient["default"].convertToType(data['cmaf'], [_ChannelPlaybackCmaf["default"]]);
        }

        if (data.hasOwnProperty('dash')) {
          obj['dash'] = _ApiClient["default"].convertToType(data['dash'], [_ChannelPlaybackCmaf["default"]]);
        }

        if (data.hasOwnProperty('hls')) {
          obj['hls'] = _ApiClient["default"].convertToType(data['hls'], [_ChannelPlaybackCmaf["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ChannelPlayback;
}();
/**
 * CMAF playback configurations
 * @member {Array.<module:model/ChannelPlaybackCmaf>} cmaf
 */


ChannelPlayback.prototype['cmaf'] = undefined;
/**
 * Dash playback configurations
 * @member {Array.<module:model/ChannelPlaybackCmaf>} dash
 */

ChannelPlayback.prototype['dash'] = undefined;
/**
 * HLS playback configurations
 * @member {Array.<module:model/ChannelPlaybackCmaf>} hls
 */

ChannelPlayback.prototype['hls'] = undefined;
var _default = ChannelPlayback;
exports["default"] = _default;