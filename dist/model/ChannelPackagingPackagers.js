"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPackagingContentProtection = _interopRequireDefault(require("./ChannelPackagingContentProtection"));

var _ChannelPackagingMp2t = _interopRequireDefault(require("./ChannelPackagingMp2t"));

var _ChannelPackagingMp = _interopRequireDefault(require("./ChannelPackagingMp4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPackagingPackagers model module.
 * @module model/ChannelPackagingPackagers
 * @version 0.0.0
 */
var ChannelPackagingPackagers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingPackagers</code>.
   * @alias module:model/ChannelPackagingPackagers
   */
  function ChannelPackagingPackagers() {
    _classCallCheck(this, ChannelPackagingPackagers);

    ChannelPackagingPackagers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingPackagers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingPackagers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingPackagers} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingPackagers} The populated <code>ChannelPackagingPackagers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingPackagers();

        if (data.hasOwnProperty('content_protection')) {
          obj['content_protection'] = _ChannelPackagingContentProtection["default"].constructFromObject(data['content_protection']);
        }

        if (data.hasOwnProperty('mp2t')) {
          obj['mp2t'] = _ChannelPackagingMp2t["default"].constructFromObject(data['mp2t']);
        }

        if (data.hasOwnProperty('mp4')) {
          obj['mp4'] = _ChannelPackagingMp["default"].constructFromObject(data['mp4']);
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingPackagers;
}();
/**
 * @member {module:model/ChannelPackagingContentProtection} content_protection
 */


ChannelPackagingPackagers.prototype['content_protection'] = undefined;
/**
 * @member {module:model/ChannelPackagingMp2t} mp2t
 */

ChannelPackagingPackagers.prototype['mp2t'] = undefined;
/**
 * @member {module:model/ChannelPackagingMp4} mp4
 */

ChannelPackagingPackagers.prototype['mp4'] = undefined;
var _default = ChannelPackagingPackagers;
exports["default"] = _default;