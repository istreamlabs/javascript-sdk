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
 * The Scte35 model module.
 * @module model/Scte35
 * @version 0.0.0
 */
var Scte35 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scte35</code>.
   * @alias module:model/Scte35
   * @param payload {String} The SCTE-35 payload, encoded as base-64 in JSON or binary data in CBOR
   */
  function Scte35(payload) {
    _classCallCheck(this, Scte35);

    Scte35.initialize(this, payload);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scte35, null, [{
    key: "initialize",
    value: function initialize(obj, payload) {
      obj['payload'] = payload;
    }
    /**
     * Constructs a <code>Scte35</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scte35} obj Optional instance to populate.
     * @return {module:model/Scte35} The populated <code>Scte35</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scte35();

        if (data.hasOwnProperty('$schema')) {
          obj['$schema'] = _ApiClient["default"].convertToType(data['$schema'], 'String');
        }

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Scte35;
}();
/**
 * An optional URL to a JSON Schema document describing this resource
 * @member {String} $schema
 */


Scte35.prototype['$schema'] = undefined;
/**
 * The SCTE-35 payload, encoded as base-64 in JSON or binary data in CBOR
 * @member {String} payload
 */

Scte35.prototype['payload'] = undefined;
var _default = Scte35;
exports["default"] = _default;