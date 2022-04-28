"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorModelErrors = _interopRequireDefault(require("./ErrorModelErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ErrorModel model module.
 * @module model/ErrorModel
 * @version 0.0.0
 */
var ErrorModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorModel</code>.
   * @alias module:model/ErrorModel
   */
  function ErrorModel() {
    _classCallCheck(this, ErrorModel);

    ErrorModel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorModel} obj Optional instance to populate.
     * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorModel();

        if (data.hasOwnProperty('$schema')) {
          obj['$schema'] = _ApiClient["default"].convertToType(data['$schema'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_ErrorModelErrors["default"]]);
        }

        if (data.hasOwnProperty('instance')) {
          obj['instance'] = _ApiClient["default"].convertToType(data['instance'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ErrorModel;
}();
/**
 * An optional URL to a JSON Schema document describing this resource
 * @member {String} $schema
 */


ErrorModel.prototype['$schema'] = undefined;
/**
 * A human-readable explanation specific to this occurrence of the problem.
 * @member {String} detail
 */

ErrorModel.prototype['detail'] = undefined;
/**
 * Optional list of individual error details
 * @member {Array.<module:model/ErrorModelErrors>} errors
 */

ErrorModel.prototype['errors'] = undefined;
/**
 * A URI reference that identifies the specific occurence of the problem.
 * @member {String} instance
 */

ErrorModel.prototype['instance'] = undefined;
/**
 * HTTP status code
 * @member {Number} status
 */

ErrorModel.prototype['status'] = undefined;
/**
 * A short, human-readable summary of the problem type. This value should not change between occurances of the error.
 * @member {String} title
 */

ErrorModel.prototype['title'] = undefined;
/**
 * A URI reference to human-readable documentation for the error.
 * @member {String} type
 * @default 'about:blank'
 */

ErrorModel.prototype['type'] = 'about:blank';
var _default = ErrorModel;
exports["default"] = _default;