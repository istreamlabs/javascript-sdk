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
 * The Summary2Source model module.
 * @module model/Summary2Source
 * @version 0.0.0
 */
var Summary2Source = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Summary2Source</code>.
   * Channel source
   * @alias module:model/Summary2Source
   * @param id {String} Station source ID
   */
  function Summary2Source(id) {
    _classCallCheck(this, Summary2Source);

    Summary2Source.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Summary2Source, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>Summary2Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary2Source} obj Optional instance to populate.
     * @return {module:model/Summary2Source} The populated <code>Summary2Source</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Summary2Source();

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

  return Summary2Source;
}();
/**
 * Station source ID
 * @member {String} id
 */


Summary2Source.prototype['id'] = undefined;
/**
 * Source name
 * @member {String} name
 */

Summary2Source.prototype['name'] = undefined;
/**
 * Link to this resource
 * @member {String} self
 */

Summary2Source.prototype['self'] = undefined;
var _default = Summary2Source;
exports["default"] = _default;