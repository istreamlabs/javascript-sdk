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
 * The ChannelPublishingDash model module.
 * @module model/ChannelPublishingDash
 * @version 0.0.0
 */
var ChannelPublishingDash = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingDash</code>.
   * DASH configures publication settings. Only one of HLS or DASH can be set.
   * @alias module:model/ChannelPublishingDash
   */
  function ChannelPublishingDash() {
    _classCallCheck(this, ChannelPublishingDash);

    ChannelPublishingDash.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingDash, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingDash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingDash} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingDash} The populated <code>ChannelPublishingDash</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingDash();

        if (data.hasOwnProperty('minimum_update_period_secs')) {
          obj['minimum_update_period_secs'] = _ApiClient["default"].convertToType(data['minimum_update_period_secs'], 'Number');
        }

        if (data.hasOwnProperty('signaling_formats')) {
          obj['signaling_formats'] = _ApiClient["default"].convertToType(data['signaling_formats'], ['String']);
        }

        if (data.hasOwnProperty('suggested_presentation_delay_secs')) {
          obj['suggested_presentation_delay_secs'] = _ApiClient["default"].convertToType(data['suggested_presentation_delay_secs'], 'Number');
        }

        if (data.hasOwnProperty('url_type')) {
          obj['url_type'] = _ApiClient["default"].convertToType(data['url_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingDash;
}();
/**
 * Sets the minimumUpdatePeriod field in MPD to be this value. If set to 0 (default), segment duration is used. The value shall not exceed the 'suggested_presentation_delay_secs'.
 * @member {Number} minimum_update_period_secs
 */


ChannelPublishingDash.prototype['minimum_update_period_secs'] = undefined;
/**
 * Signaling formats specifies which SCTE-35 timeline marker formatting to use when rendering playlists.
 * @member {Array.<module:model/ChannelPublishingDash.SignalingFormatsEnum>} signaling_formats
 */

ChannelPublishingDash.prototype['signaling_formats'] = undefined;
/**
 * The suggested amount of time (in seconds) the player should be behind the live stream. This value must be greater or equal to 'minimum_update_period_secs'.
 * @member {Number} suggested_presentation_delay_secs
 */

ChannelPublishingDash.prototype['suggested_presentation_delay_secs'] = undefined;
/**
 * If set to 'URL_TYPE_UNDEFINED' playlist generation will use 'RELATIVE'.
 * @member {module:model/ChannelPublishingDash.UrlTypeEnum} url_type
 */

ChannelPublishingDash.prototype['url_type'] = undefined;
/**
 * Allowed values for the <code>signalingFormats</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingDash['SignalingFormatsEnum'] = {
  /**
   * value: "SCTE35_BIN_DFP"
   * @const
   */
  "BIN_DFP": "SCTE35_BIN_DFP",

  /**
   * value: "SCTE35_SPLICE_INFO_SECTION"
   * @const
   */
  "SPLICE_INFO_SECTION": "SCTE35_SPLICE_INFO_SECTION",

  /**
   * value: "SCTE35_BIN"
   * @const
   */
  "BIN": "SCTE35_BIN",

  /**
   * value: "SCTE35_SPLICE_INFO_SECTION_WITH_PRESENTATION_TIME"
   * @const
   */
  "SPLICE_INFO_SECTION_WITH_PRESENTATION_TIME": "SCTE35_SPLICE_INFO_SECTION_WITH_PRESENTATION_TIME",

  /**
   * value: "SCTE35_BIN_WITH_PRESENTATION_TIME"
   * @const
   */
  "BIN_WITH_PRESENTATION_TIME": "SCTE35_BIN_WITH_PRESENTATION_TIME"
};
/**
 * Allowed values for the <code>url_type</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingDash['UrlTypeEnum'] = {
  /**
   * value: "RELATIVE"
   * @const
   */
  "RELATIVE": "RELATIVE",

  /**
   * value: "ABSOLUTE"
   * @const
   */
  "ABSOLUTE": "ABSOLUTE",

  /**
   * value: "HOST_RELATIVE"
   * @const
   */
  "HOST_RELATIVE": "HOST_RELATIVE"
};
var _default = ChannelPublishingDash;
exports["default"] = _default;