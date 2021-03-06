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
 * The SpliceInsertEndSignal model module.
 * @module model/SpliceInsertEndSignal
 * @version 0.0.0
 */
var SpliceInsertEndSignal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpliceInsertEndSignal</code>.
   * @alias module:model/SpliceInsertEndSignal
   * @param eventId {Number} Event ID
   */
  function SpliceInsertEndSignal(eventId) {
    _classCallCheck(this, SpliceInsertEndSignal);

    SpliceInsertEndSignal.initialize(this, eventId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpliceInsertEndSignal, null, [{
    key: "initialize",
    value: function initialize(obj, eventId) {
      obj['event_id'] = eventId;
    }
    /**
     * Constructs a <code>SpliceInsertEndSignal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpliceInsertEndSignal} obj Optional instance to populate.
     * @return {module:model/SpliceInsertEndSignal} The populated <code>SpliceInsertEndSignal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpliceInsertEndSignal();

        if (data.hasOwnProperty('$schema')) {
          obj['$schema'] = _ApiClient["default"].convertToType(data['$schema'], 'String');
        }

        if (data.hasOwnProperty('event_id')) {
          obj['event_id'] = _ApiClient["default"].convertToType(data['event_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SpliceInsertEndSignal;
}();
/**
 * An optional URL to a JSON Schema document describing this resource
 * @member {String} $schema
 */


SpliceInsertEndSignal.prototype['$schema'] = undefined;
/**
 * Event ID
 * @member {Number} event_id
 */

SpliceInsertEndSignal.prototype['event_id'] = undefined;
var _default = SpliceInsertEndSignal;
exports["default"] = _default;