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
 * The ErrorModelErrors model module.
 * @module model/ErrorModelErrors
 * @version 0.0.0
 */
var ErrorModelErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorModelErrors</code>.
   * @alias module:model/ErrorModelErrors
   */
  function ErrorModelErrors() {
    _classCallCheck(this, ErrorModelErrors);

    ErrorModelErrors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorModelErrors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorModelErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorModelErrors} obj Optional instance to populate.
     * @return {module:model/ErrorModelErrors} The populated <code>ErrorModelErrors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorModelErrors();

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], Object);
        }
      }

      return obj;
    }
  }]);

  return ErrorModelErrors;
}();
/**
 * Where the error occured, e.g. 'body.items[3].tags' or 'path.thing-id'
 * @member {String} location
 */


ErrorModelErrors.prototype['location'] = undefined;
/**
 * Error message text
 * @member {String} message
 */

ErrorModelErrors.prototype['message'] = undefined;
/**
 * The value at the given location
 * @member {Object} value
 */

ErrorModelErrors.prototype['value'] = undefined;
var _default = ErrorModelErrors;
exports["default"] = _default;