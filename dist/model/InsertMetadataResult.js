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
 * The InsertMetadataResult model module.
 * @module model/InsertMetadataResult
 * @version 0.0.0
 */
var InsertMetadataResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InsertMetadataResult</code>.
   * @alias module:model/InsertMetadataResult
   * @param presentationTime {Date} The media stream timestamp for where the transcoder inserted the metadata
   */
  function InsertMetadataResult(presentationTime) {
    _classCallCheck(this, InsertMetadataResult);

    InsertMetadataResult.initialize(this, presentationTime);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InsertMetadataResult, null, [{
    key: "initialize",
    value: function initialize(obj, presentationTime) {
      obj['presentation_time'] = presentationTime;
    }
    /**
     * Constructs a <code>InsertMetadataResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsertMetadataResult} obj Optional instance to populate.
     * @return {module:model/InsertMetadataResult} The populated <code>InsertMetadataResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InsertMetadataResult();

        if (data.hasOwnProperty('$schema')) {
          obj['$schema'] = _ApiClient["default"].convertToType(data['$schema'], 'String');
        }

        if (data.hasOwnProperty('presentation_time')) {
          obj['presentation_time'] = _ApiClient["default"].convertToType(data['presentation_time'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return InsertMetadataResult;
}();
/**
 * An optional URL to a JSON Schema document describing this resource
 * @member {String} $schema
 */


InsertMetadataResult.prototype['$schema'] = undefined;
/**
 * The media stream timestamp for where the transcoder inserted the metadata
 * @member {Date} presentation_time
 */

InsertMetadataResult.prototype['presentation_time'] = undefined;
var _default = InsertMetadataResult;
exports["default"] = _default;