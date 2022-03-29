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
 * The GenericSignal model module.
 * @module model/GenericSignal
 * @version 0.0.0
 */
var GenericSignal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenericSignal</code>.
   * @alias module:model/GenericSignal
   * @param eventId {Number} Event ID
   * @param segmentType {module:model/GenericSignal.SegmentTypeEnum} Segment type
   * @param signalType {module:model/GenericSignal.SignalTypeEnum} Signal type
   */
  function GenericSignal(eventId, segmentType, signalType) {
    _classCallCheck(this, GenericSignal);

    GenericSignal.initialize(this, eventId, segmentType, signalType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenericSignal, null, [{
    key: "initialize",
    value: function initialize(obj, eventId, segmentType, signalType) {
      obj['event_id'] = eventId;
      obj['segment_type'] = segmentType;
      obj['signal_type'] = signalType;
    }
    /**
     * Constructs a <code>GenericSignal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericSignal} obj Optional instance to populate.
     * @return {module:model/GenericSignal} The populated <code>GenericSignal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenericSignal();

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }

        if (data.hasOwnProperty('event_id')) {
          obj['event_id'] = _ApiClient["default"].convertToType(data['event_id'], 'Number');
        }

        if (data.hasOwnProperty('segment_type')) {
          obj['segment_type'] = _ApiClient["default"].convertToType(data['segment_type'], 'String');
        }

        if (data.hasOwnProperty('signal_type')) {
          obj['signal_type'] = _ApiClient["default"].convertToType(data['signal_type'], 'String');
        }

        if (data.hasOwnProperty('slate_uri')) {
          obj['slate_uri'] = _ApiClient["default"].convertToType(data['slate_uri'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('upids')) {
          obj['upids'] = _ApiClient["default"].convertToType(data['upids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return GenericSignal;
}();
/**
 * Splice duration (ms).  If no duration or a duration of 0 then the splice is indifinite.
 * @member {Number} duration
 * @default 0
 */


GenericSignal.prototype['duration'] = 0;
/**
 * Event ID
 * @member {Number} event_id
 */

GenericSignal.prototype['event_id'] = undefined;
/**
 * Segment type
 * @member {module:model/GenericSignal.SegmentTypeEnum} segment_type
 */

GenericSignal.prototype['segment_type'] = undefined;
/**
 * Signal type
 * @member {module:model/GenericSignal.SignalTypeEnum} signal_type
 */

GenericSignal.prototype['signal_type'] = undefined;
/**
 * Slate url
 * @member {String} slate_uri
 */

GenericSignal.prototype['slate_uri'] = undefined;
/**
 * Qualifier type
 * @member {module:model/GenericSignal.TypeEnum} type
 */

GenericSignal.prototype['type'] = undefined;
/**
 * UPIDs
 * @member {Array.<String>} upids
 */

GenericSignal.prototype['upids'] = undefined;
/**
 * Allowed values for the <code>segment_type</code> property.
 * @enum {String}
 * @readonly
 */

GenericSignal['SegmentTypeEnum'] = {
  /**
   * value: "splice_insert"
   * @const
   */
  "splice_insert": "splice_insert",

  /**
   * value: "content_id"
   * @const
   */
  "content_id": "content_id",

  /**
   * value: "program"
   * @const
   */
  "program": "program",

  /**
   * value: "program_breakaway"
   * @const
   */
  "program_breakaway": "program_breakaway",

  /**
   * value: "chapter"
   * @const
   */
  "chapter": "chapter",

  /**
   * value: "break"
   * @const
   */
  "break": "break",

  /**
   * value: "opening_credit"
   * @const
   */
  "opening_credit": "opening_credit",

  /**
   * value: "closing_credit"
   * @const
   */
  "closing_credit": "closing_credit",

  /**
   * value: "provider_placement"
   * @const
   */
  "provider_placement": "provider_placement",

  /**
   * value: "distributor_placement"
   * @const
   */
  "distributor_placement": "distributor_placement",

  /**
   * value: "provider_overlay"
   * @const
   */
  "provider_overlay": "provider_overlay",

  /**
   * value: "distributor_overlay"
   * @const
   */
  "distributor_overlay": "distributor_overlay",

  /**
   * value: "provider_ad"
   * @const
   */
  "provider_ad": "provider_ad",

  /**
   * value: "distributor_ad"
   * @const
   */
  "distributor_ad": "distributor_ad",

  /**
   * value: "unscheduled_event"
   * @const
   */
  "unscheduled_event": "unscheduled_event",

  /**
   * value: "network"
   * @const
   */
  "network": "network",

  /**
   * value: "slate"
   * @const
   */
  "slate": "slate"
};
/**
 * Allowed values for the <code>signal_type</code> property.
 * @enum {String}
 * @readonly
 */

GenericSignal['SignalTypeEnum'] = {
  /**
   * value: "start"
   * @const
   */
  "start": "start",

  /**
   * value: "end"
   * @const
   */
  "end": "end",

  /**
   * value: "breakaway"
   * @const
   */
  "breakaway": "breakaway",

  /**
   * value: "resumption"
   * @const
   */
  "resumption": "resumption"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

GenericSignal['TypeEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "overlap"
   * @const
   */
  "overlap": "overlap",

  /**
   * value: "in_progress"
   * @const
   */
  "in_progress": "in_progress"
};
var _default = GenericSignal;
exports["default"] = _default;