"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelSignalingTierFilter = _interopRequireDefault(require("./ChannelSignalingTierFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelSignalingSegmentSettings model module.
 * @module model/ChannelSignalingSegmentSettings
 * @version 0.0.0
 */
var ChannelSignalingSegmentSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelSignalingSegmentSettings</code>.
   * @alias module:model/ChannelSignalingSegmentSettings
   */
  function ChannelSignalingSegmentSettings() {
    _classCallCheck(this, ChannelSignalingSegmentSettings);

    ChannelSignalingSegmentSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelSignalingSegmentSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelSignalingSegmentSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSignalingSegmentSettings} obj Optional instance to populate.
     * @return {module:model/ChannelSignalingSegmentSettings} The populated <code>ChannelSignalingSegmentSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelSignalingSegmentSettings();

        if (data.hasOwnProperty('default_duration_secs')) {
          obj['default_duration_secs'] = _ApiClient["default"].convertToType(data['default_duration_secs'], 'Number');
        }

        if (data.hasOwnProperty('emit_default_duration')) {
          obj['emit_default_duration'] = _ApiClient["default"].convertToType(data['emit_default_duration'], 'Boolean');
        }

        if (data.hasOwnProperty('offset_millis')) {
          obj['offset_millis'] = _ApiClient["default"].convertToType(data['offset_millis'], 'Number');
        }

        if (data.hasOwnProperty('segment_end_mode')) {
          obj['segment_end_mode'] = _ApiClient["default"].convertToType(data['segment_end_mode'], 'String');
        }

        if (data.hasOwnProperty('segments')) {
          obj['segments'] = _ApiClient["default"].convertToType(data['segments'], ['String']);
        }

        if (data.hasOwnProperty('tier_filter')) {
          obj['tier_filter'] = _ChannelSignalingTierFilter["default"].constructFromObject(data['tier_filter']);
        }
      }

      return obj;
    }
  }]);

  return ChannelSignalingSegmentSettings;
}();
/**
 * Specifies the duration of a segment when the in-band SCTE-35 that initiates it (e.g. Distributor Placement Opportunity Start) is missing an explicit duration. N.B. for program and ad types, this also affects 'Simple Program' and 'Simple Ad' markers, respectively.
 * @member {Number} default_duration_secs
 */


ChannelSignalingSegmentSettings.prototype['default_duration_secs'] = undefined;
/**
 * Determines whether to include the default duration in the output SCTE-35 messages when the input SCTE-35 message did not specify a duration.
 * @member {Boolean} emit_default_duration
 */

ChannelSignalingSegmentSettings.prototype['emit_default_duration'] = undefined;
/**
 * Specifies a 'correction' to the splice_time of in-band SCTE-35 in milliseconds.
 * @member {Number} offset_millis
 */

ChannelSignalingSegmentSettings.prototype['offset_millis'] = undefined;
/**
 * Determines which Segment End signaling mode to use for the provided segments. If unspecified, defaults to MATCH_END_EVENT_ID.
 * @member {module:model/ChannelSignalingSegmentSettings.SegmentEndModeEnum} segment_end_mode
 */

ChannelSignalingSegmentSettings.prototype['segment_end_mode'] = undefined;
/**
 * Specifies the list of which segment types this setting applies to. Any segment type defined here _must_ also be present in the parent signaling configuration.
 * @member {Array.<module:model/ChannelSignalingSegmentSettings.SegmentsEnum>} segments
 */

ChannelSignalingSegmentSettings.prototype['segments'] = undefined;
/**
 * @member {module:model/ChannelSignalingTierFilter} tier_filter
 */

ChannelSignalingSegmentSettings.prototype['tier_filter'] = undefined;
/**
 * Allowed values for the <code>segment_end_mode</code> property.
 * @enum {String}
 * @readonly
 */

ChannelSignalingSegmentSettings['SegmentEndModeEnum'] = {
  /**
   * value: "MATCH_END_EVENT_ID"
   * @const
   */
  "MATCH_END_EVENT_ID": "MATCH_END_EVENT_ID",

  /**
   * value: "IGNORE_END_EVENT_ID"
   * @const
   */
  "IGNORE_END_EVENT_ID": "IGNORE_END_EVENT_ID",

  /**
   * value: "IGNORE_END_SIGNAL"
   * @const
   */
  "IGNORE_END_SIGNAL": "IGNORE_END_SIGNAL"
};
/**
 * Allowed values for the <code>segments</code> property.
 * @enum {String}
 * @readonly
 */

ChannelSignalingSegmentSettings['SegmentsEnum'] = {
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
var _default = ChannelSignalingSegmentSettings;
exports["default"] = _default;