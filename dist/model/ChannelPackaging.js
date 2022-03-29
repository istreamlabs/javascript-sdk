"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPackagingPackagers = _interopRequireDefault(require("./ChannelPackagingPackagers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPackaging model module.
 * @module model/ChannelPackaging
 * @version 0.0.0
 */
var ChannelPackaging = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackaging</code>.
   * Packaging configures media format and content protection settings.
   * @alias module:model/ChannelPackaging
   */
  function ChannelPackaging() {
    _classCallCheck(this, ChannelPackaging);

    ChannelPackaging.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackaging, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackaging</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackaging} obj Optional instance to populate.
     * @return {module:model/ChannelPackaging} The populated <code>ChannelPackaging</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackaging();

        if (data.hasOwnProperty('packagers')) {
          obj['packagers'] = _ApiClient["default"].convertToType(data['packagers'], {
            'String': _ChannelPackagingPackagers["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return ChannelPackaging;
}();
/**
 * Defines the list of packagers available for Publications.
 * @member {Object.<String, module:model/ChannelPackagingPackagers>} packagers
 */


ChannelPackaging.prototype['packagers'] = undefined;
var _default = ChannelPackaging;
exports["default"] = _default;