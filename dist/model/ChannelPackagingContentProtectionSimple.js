"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPackagingContentProtectionSimplePublishPoints = _interopRequireDefault(require("./ChannelPackagingContentProtectionSimplePublishPoints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPackagingContentProtectionSimple model module.
 * @module model/ChannelPackagingContentProtectionSimple
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionSimple</code>.
   * Only one of [&#39;simple&#39;, &#39;atlas&#39;, &#39;cpix&#39;] may be set.
   * @alias module:model/ChannelPackagingContentProtectionSimple
   */
  function ChannelPackagingContentProtectionSimple() {
    _classCallCheck(this, ChannelPackagingContentProtectionSimple);

    ChannelPackagingContentProtectionSimple.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionSimple, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionSimple} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionSimple} The populated <code>ChannelPackagingContentProtectionSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionSimple();

        if (data.hasOwnProperty('publish_points')) {
          obj['publish_points'] = _ApiClient["default"].convertToType(data['publish_points'], [_ChannelPackagingContentProtectionSimplePublishPoints["default"]]);
        }

        if (data.hasOwnProperty('require_publish')) {
          obj['require_publish'] = _ApiClient["default"].convertToType(data['require_publish'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionSimple;
}();
/**
 * Pub points where keys should be published. If multiple are specified, only one needs to succeed to consider the key successfully published.
 * @member {Array.<module:model/ChannelPackagingContentProtectionSimplePublishPoints>} publish_points
 */


ChannelPackagingContentProtectionSimple.prototype['publish_points'] = undefined;
/**
 * Indicates which publish points must succeed for segment publishing to use the keys.
 * @member {module:model/ChannelPackagingContentProtectionSimple.RequirePublishEnum} require_publish
 */

ChannelPackagingContentProtectionSimple.prototype['require_publish'] = undefined;
/**
 * Allowed values for the <code>require_publish</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPackagingContentProtectionSimple['RequirePublishEnum'] = {
  /**
   * value: "ANY"
   * @const
   */
  "ANY": "ANY",

  /**
   * value: "ALL"
   * @const
   */
  "ALL": "ALL"
};
var _default = ChannelPackagingContentProtectionSimple;
exports["default"] = _default;