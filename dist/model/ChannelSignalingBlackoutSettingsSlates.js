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
 * The ChannelSignalingBlackoutSettingsSlates model module.
 * @module model/ChannelSignalingBlackoutSettingsSlates
 * @version 0.0.0
 */
var ChannelSignalingBlackoutSettingsSlates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelSignalingBlackoutSettingsSlates</code>.
   * @alias module:model/ChannelSignalingBlackoutSettingsSlates
   */
  function ChannelSignalingBlackoutSettingsSlates() {
    _classCallCheck(this, ChannelSignalingBlackoutSettingsSlates);

    ChannelSignalingBlackoutSettingsSlates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelSignalingBlackoutSettingsSlates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelSignalingBlackoutSettingsSlates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSignalingBlackoutSettingsSlates} obj Optional instance to populate.
     * @return {module:model/ChannelSignalingBlackoutSettingsSlates} The populated <code>ChannelSignalingBlackoutSettingsSlates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelSignalingBlackoutSettingsSlates();

        if (data.hasOwnProperty('blackout_slate_url')) {
          obj['blackout_slate_url'] = _ApiClient["default"].convertToType(data['blackout_slate_url'], 'String');
        }

        if (data.hasOwnProperty('segments')) {
          obj['segments'] = _ApiClient["default"].convertToType(data['segments'], ['String']);
        }

        if (data.hasOwnProperty('upids')) {
          obj['upids'] = _ApiClient["default"].convertToType(data['upids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ChannelSignalingBlackoutSettingsSlates;
}();
/**
 * Blackout slate URL to use for the specified segments. It must have one audio and one video stream. Either MPEG2 or H.264 can be used.
 * @member {String} blackout_slate_url
 */


ChannelSignalingBlackoutSettingsSlates.prototype['blackout_slate_url'] = undefined;
/**
 * Segment types that shall utilize the blackout slate URL. Any segment type defined here _must_ also be present in the parent signaling configuration.
 * @member {Array.<module:model/ChannelSignalingBlackoutSettingsSlates.SegmentsEnum>} segments
 */

ChannelSignalingBlackoutSettingsSlates.prototype['segments'] = undefined;
/**
 * Exclusive list of hex string encoded colon separated UPID Type:ID pairs (e.g. '0A:1A2B3C4D') to enable this blackout slate on.
 * @member {Array.<String>} upids
 */

ChannelSignalingBlackoutSettingsSlates.prototype['upids'] = undefined;
/**
 * Allowed values for the <code>segments</code> property.
 * @enum {String}
 * @readonly
 */

ChannelSignalingBlackoutSettingsSlates['SegmentsEnum'] = {
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
var _default = ChannelSignalingBlackoutSettingsSlates;
exports["default"] = _default;