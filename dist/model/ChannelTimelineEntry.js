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
 * The ChannelTimelineEntry model module.
 * @module model/ChannelTimelineEntry
 * @version 0.0.0
 */
var ChannelTimelineEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTimelineEntry</code>.
   * @alias module:model/ChannelTimelineEntry
   * @param action {String} Shortcode indicating what action was taken
   * @param agent {String} Agent responsible for the action taken
   * @param requestBody {String} The request body, if any, of the original action
   * @param statusCode {Number} HTTP Status code indicating outcome of the action.
   * @param timestamp {Date} Timestamp of the action in UTC
   * @param traceId {String} Correlation identifier for tracing
   */
  function ChannelTimelineEntry(action, agent, requestBody, statusCode, timestamp, traceId) {
    _classCallCheck(this, ChannelTimelineEntry);

    ChannelTimelineEntry.initialize(this, action, agent, requestBody, statusCode, timestamp, traceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTimelineEntry, null, [{
    key: "initialize",
    value: function initialize(obj, action, agent, requestBody, statusCode, timestamp, traceId) {
      obj['action'] = action;
      obj['agent'] = agent;
      obj['request_body'] = requestBody;
      obj['status_code'] = statusCode;
      obj['timestamp'] = timestamp;
      obj['trace_id'] = traceId;
    }
    /**
     * Constructs a <code>ChannelTimelineEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTimelineEntry} obj Optional instance to populate.
     * @return {module:model/ChannelTimelineEntry} The populated <code>ChannelTimelineEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTimelineEntry();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('agent')) {
          obj['agent'] = _ApiClient["default"].convertToType(data['agent'], 'String');
        }

        if (data.hasOwnProperty('request_body')) {
          obj['request_body'] = _ApiClient["default"].convertToType(data['request_body'], 'String');
        }

        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Date');
        }

        if (data.hasOwnProperty('trace_id')) {
          obj['trace_id'] = _ApiClient["default"].convertToType(data['trace_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelTimelineEntry;
}();
/**
 * Shortcode indicating what action was taken
 * @member {String} action
 */


ChannelTimelineEntry.prototype['action'] = undefined;
/**
 * Agent responsible for the action taken
 * @member {String} agent
 */

ChannelTimelineEntry.prototype['agent'] = undefined;
/**
 * The request body, if any, of the original action
 * @member {String} request_body
 */

ChannelTimelineEntry.prototype['request_body'] = undefined;
/**
 * HTTP Status code indicating outcome of the action.
 * @member {Number} status_code
 */

ChannelTimelineEntry.prototype['status_code'] = undefined;
/**
 * Timestamp of the action in UTC
 * @member {Date} timestamp
 */

ChannelTimelineEntry.prototype['timestamp'] = undefined;
/**
 * Correlation identifier for tracing
 * @member {String} trace_id
 */

ChannelTimelineEntry.prototype['trace_id'] = undefined;
var _default = ChannelTimelineEntry;
exports["default"] = _default;