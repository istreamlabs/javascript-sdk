"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Summary2Source = _interopRequireDefault(require("./Summary2Source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Summary2 model module.
 * @module model/Summary2
 * @version 0.0.0
 */
var Summary2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Summary2</code>.
   * @alias module:model/Summary2
   * @param etag {String} Content hash
   * @param id {String} Unique channel ID
   * @param source {module:model/Summary2Source} 
   */
  function Summary2(etag, id, source) {
    _classCallCheck(this, Summary2);

    Summary2.initialize(this, etag, id, source);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Summary2, null, [{
    key: "initialize",
    value: function initialize(obj, etag, id, source) {
      obj['etag'] = etag;
      obj['id'] = id;
      obj['source'] = source;
    }
    /**
     * Constructs a <code>Summary2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary2} obj Optional instance to populate.
     * @return {module:model/Summary2} The populated <code>Summary2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Summary2();

        if (data.hasOwnProperty('etag')) {
          obj['etag'] = _ApiClient["default"].convertToType(data['etag'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _Summary2Source["default"].constructFromObject(data['source']);
        }
      }

      return obj;
    }
  }]);

  return Summary2;
}();
/**
 * Content hash
 * @member {String} etag
 */


Summary2.prototype['etag'] = undefined;
/**
 * Unique channel ID
 * @member {String} id
 */

Summary2.prototype['id'] = undefined;
/**
 * Channel Labels
 * @member {Array.<String>} labels
 */

Summary2.prototype['labels'] = undefined;
/**
 * Friendly channel description
 * @member {String} name
 */

Summary2.prototype['name'] = undefined;
/**
 * Link to this resource
 * @member {String} self
 */

Summary2.prototype['self'] = undefined;
/**
 * @member {module:model/Summary2Source} source
 */

Summary2.prototype['source'] = undefined;
var _default = Summary2;
exports["default"] = _default;