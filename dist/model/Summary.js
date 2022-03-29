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
 * The Summary model module.
 * @module model/Summary
 * @version 0.0.0
 */
var Summary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Summary</code>.
   * @alias module:model/Summary
   * @param id {String} Station source ID
   */
  function Summary(id) {
    _classCallCheck(this, Summary);

    Summary.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Summary, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary} obj Optional instance to populate.
     * @return {module:model/Summary} The populated <code>Summary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Summary();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Summary;
}();
/**
 * Station source ID
 * @member {String} id
 */


Summary.prototype['id'] = undefined;
/**
 * Source name
 * @member {String} name
 */

Summary.prototype['name'] = undefined;
/**
 * Link to this resource
 * @member {String} self
 */

Summary.prototype['self'] = undefined;
var _default = Summary;
exports["default"] = _default;