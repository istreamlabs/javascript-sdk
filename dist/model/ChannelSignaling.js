"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelSignalingBlackoutSettings = _interopRequireDefault(require("./ChannelSignalingBlackoutSettings"));

var _ChannelSignalingSegmentSettings = _interopRequireDefault(require("./ChannelSignalingSegmentSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelSignaling model module.
 * @module model/ChannelSignaling
 * @version 0.0.0
 */
var ChannelSignaling = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelSignaling</code>.
   * Signaling configures in-band signaling (i.e. SCTE-35).
   * @alias module:model/ChannelSignaling
   */
  function ChannelSignaling() {
    _classCallCheck(this, ChannelSignaling);

    ChannelSignaling.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelSignaling, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelSignaling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSignaling} obj Optional instance to populate.
     * @return {module:model/ChannelSignaling} The populated <code>ChannelSignaling</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelSignaling();

        if (data.hasOwnProperty('blackout_settings')) {
          obj['blackout_settings'] = _ChannelSignalingBlackoutSettings["default"].constructFromObject(data['blackout_settings']);
        }

        if (data.hasOwnProperty('disable_inband_parsing')) {
          obj['disable_inband_parsing'] = _ApiClient["default"].convertToType(data['disable_inband_parsing'], 'Boolean');
        }

        if (data.hasOwnProperty('segment_settings')) {
          obj['segment_settings'] = _ApiClient["default"].convertToType(data['segment_settings'], [_ChannelSignalingSegmentSettings["default"]]);
        }

        if (data.hasOwnProperty('segments')) {
          obj['segments'] = _ApiClient["default"].convertToType(data['segments'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ChannelSignaling;
}();
/**
 * @member {module:model/ChannelSignalingBlackoutSettings} blackout_settings
 */


ChannelSignaling.prototype['blackout_settings'] = undefined;
/**
 * Disable parsing SCTE-35 in-band signaling. Out-of-band signaling is still allowed.
 * @member {Boolean} disable_inband_parsing
 */

ChannelSignaling.prototype['disable_inband_parsing'] = undefined;
/**
 * Settings that apply to specific segments.
 * @member {Array.<module:model/ChannelSignalingSegmentSettings>} segment_settings
 */

ChannelSignaling.prototype['segment_settings'] = undefined;
/**
 * Segment types to process for in-band signaling.
 * @member {Array.<module:model/ChannelSignaling.SegmentsEnum>} segments
 */

ChannelSignaling.prototype['segments'] = undefined;
/**
 * Allowed values for the <code>segments</code> property.
 * @enum {String}
 * @readonly
 */

ChannelSignaling['SegmentsEnum'] = {
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
var _default = ChannelSignaling;
exports["default"] = _default;