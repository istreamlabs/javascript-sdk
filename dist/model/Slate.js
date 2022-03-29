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
 * The Slate model module.
 * @module model/Slate
 * @version 0.0.0
 */
var Slate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Slate</code>.
   * @alias module:model/Slate
   * @param uri {String} Slate url
   */
  function Slate(uri) {
    _classCallCheck(this, Slate);

    Slate.initialize(this, uri);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Slate, null, [{
    key: "initialize",
    value: function initialize(obj, uri) {
      obj['uri'] = uri;
    }
    /**
     * Constructs a <code>Slate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Slate} obj Optional instance to populate.
     * @return {module:model/Slate} The populated <code>Slate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Slate();

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Slate;
}();
/**
 * Slate duration (ms)
 * @member {Number} duration
 * @default 0
 */


Slate.prototype['duration'] = 0;
/**
 * Slate url
 * @member {String} uri
 */

Slate.prototype['uri'] = undefined;
var _default = Slate;
exports["default"] = _default;