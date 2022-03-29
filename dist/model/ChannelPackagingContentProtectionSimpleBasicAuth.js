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
 * The ChannelPackagingContentProtectionSimpleBasicAuth model module.
 * @module model/ChannelPackagingContentProtectionSimpleBasicAuth
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionSimpleBasicAuth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionSimpleBasicAuth</code>.
   * Only one of [&#39;basic_auth&#39;] may be set.
   * @alias module:model/ChannelPackagingContentProtectionSimpleBasicAuth
   */
  function ChannelPackagingContentProtectionSimpleBasicAuth() {
    _classCallCheck(this, ChannelPackagingContentProtectionSimpleBasicAuth);

    ChannelPackagingContentProtectionSimpleBasicAuth.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionSimpleBasicAuth, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionSimpleBasicAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionSimpleBasicAuth} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionSimpleBasicAuth} The populated <code>ChannelPackagingContentProtectionSimpleBasicAuth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionSimpleBasicAuth();

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionSimpleBasicAuth;
}();
/**
 * Plain text password for basic auth.
 * @member {String} password
 */


ChannelPackagingContentProtectionSimpleBasicAuth.prototype['password'] = undefined;
/**
 * Username for basic auth.
 * @member {String} username
 */

ChannelPackagingContentProtectionSimpleBasicAuth.prototype['username'] = undefined;
var _default = ChannelPackagingContentProtectionSimpleBasicAuth;
exports["default"] = _default;