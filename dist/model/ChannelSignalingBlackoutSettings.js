"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelSignalingBlackoutSettingsSlates = _interopRequireDefault(require("./ChannelSignalingBlackoutSettingsSlates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelSignalingBlackoutSettings model module.
 * @module model/ChannelSignalingBlackoutSettings
 * @version 0.0.0
 */
var ChannelSignalingBlackoutSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelSignalingBlackoutSettings</code>.
   * Configure blackout: replacing content with custom slates based on program signaling.
   * @alias module:model/ChannelSignalingBlackoutSettings
   */
  function ChannelSignalingBlackoutSettings() {
    _classCallCheck(this, ChannelSignalingBlackoutSettings);

    ChannelSignalingBlackoutSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelSignalingBlackoutSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelSignalingBlackoutSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSignalingBlackoutSettings} obj Optional instance to populate.
     * @return {module:model/ChannelSignalingBlackoutSettings} The populated <code>ChannelSignalingBlackoutSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelSignalingBlackoutSettings();

        if (data.hasOwnProperty('default_blackout_slate_url')) {
          obj['default_blackout_slate_url'] = _ApiClient["default"].convertToType(data['default_blackout_slate_url'], 'String');
        }

        if (data.hasOwnProperty('force_blackout_segments')) {
          obj['force_blackout_segments'] = _ApiClient["default"].convertToType(data['force_blackout_segments'], ['String']);
        }

        if (data.hasOwnProperty('honor_web_delivery_restriction')) {
          obj['honor_web_delivery_restriction'] = _ApiClient["default"].convertToType(data['honor_web_delivery_restriction'], 'Boolean');
        }

        if (data.hasOwnProperty('slates')) {
          obj['slates'] = _ApiClient["default"].convertToType(data['slates'], [_ChannelSignalingBlackoutSettingsSlates["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ChannelSignalingBlackoutSettings;
}();
/**
 * Default slate URL to use for blackouts. Can be overridden by the 'slates' field.
 * @member {String} default_blackout_slate_url
 */


ChannelSignalingBlackoutSettings.prototype['default_blackout_slate_url'] = undefined;
/**
 * List of signaling segment types to force blackout, e.g. add 'SPLICE_INSERT' to blackout all ads signaled via SCTE-35 splice_insert.
 * @member {Array.<module:model/ChannelSignalingBlackoutSettings.ForceBlackoutSegmentsEnum>} force_blackout_segments
 */

ChannelSignalingBlackoutSettings.prototype['force_blackout_segments'] = undefined;
/**
 * Determines whether to honor the web_delivery_allowed attribute in SCTE-35 segmentation descriptors. When this is enabled, a segmentation descriptor with web_delivery_allowed=false will trigger a blackout.
 * @member {Boolean} honor_web_delivery_restriction
 */

ChannelSignalingBlackoutSettings.prototype['honor_web_delivery_restriction'] = undefined;
/**
 * Per-segment type slate overrides.
 * @member {Array.<module:model/ChannelSignalingBlackoutSettingsSlates>} slates
 */

ChannelSignalingBlackoutSettings.prototype['slates'] = undefined;
/**
 * Allowed values for the <code>forceBlackoutSegments</code> property.
 * @enum {String}
 * @readonly
 */

ChannelSignalingBlackoutSettings['ForceBlackoutSegmentsEnum'] = {
  /**
   * value: "SPLICE_INSERT"
   * @const
   */
  "SPLICE_INSERT": "SPLICE_INSERT",

  /**
   * value: "CONTENT_ID"
   * @const
   */
  "CONTENT_ID": "CONTENT_ID",

  /**
   * value: "PROGRAM"
   * @const
   */
  "PROGRAM": "PROGRAM",

  /**
   * value: "PROGRAM_BLACKOUT_OVERRIDE"
   * @const
   */
  "PROGRAM_BLACKOUT_OVERRIDE": "PROGRAM_BLACKOUT_OVERRIDE",

  /**
   * value: "PROGRAM_BREAKAWAY"
   * @const
   */
  "PROGRAM_BREAKAWAY": "PROGRAM_BREAKAWAY",

  /**
   * value: "CHAPTER"
   * @const
   */
  "CHAPTER": "CHAPTER",

  /**
   * value: "BREAK"
   * @const
   */
  "BREAK": "BREAK",

  /**
   * value: "OPENING_CREDIT"
   * @const
   */
  "OPENING_CREDIT": "OPENING_CREDIT",

  /**
   * value: "CLOSING_CREDIT"
   * @const
   */
  "CLOSING_CREDIT": "CLOSING_CREDIT",

  /**
   * value: "PROVIDER_PLACEMENT_OP"
   * @const
   */
  "PROVIDER_PLACEMENT_OP": "PROVIDER_PLACEMENT_OP",

  /**
   * value: "DISTRIBUTOR_PLACEMENT_OP"
   * @const
   */
  "DISTRIBUTOR_PLACEMENT_OP": "DISTRIBUTOR_PLACEMENT_OP",

  /**
   * value: "PROVIDER_OVERLAY_OP"
   * @const
   */
  "PROVIDER_OVERLAY_OP": "PROVIDER_OVERLAY_OP",

  /**
   * value: "DISTRIBUTOR_OVERLAY_OP"
   * @const
   */
  "DISTRIBUTOR_OVERLAY_OP": "DISTRIBUTOR_OVERLAY_OP",

  /**
   * value: "PROVIDER_AD"
   * @const
   */
  "PROVIDER_AD": "PROVIDER_AD",

  /**
   * value: "DISTRIBUTOR_AD"
   * @const
   */
  "DISTRIBUTOR_AD": "DISTRIBUTOR_AD",

  /**
   * value: "UNSCHEDULED_EVENT"
   * @const
   */
  "UNSCHEDULED_EVENT": "UNSCHEDULED_EVENT",

  /**
   * value: "NETWORK"
   * @const
   */
  "NETWORK": "NETWORK",

  /**
   * value: "SLATE"
   * @const
   */
  "SLATE": "SLATE"
};
var _default = ChannelSignalingBlackoutSettings;
exports["default"] = _default;