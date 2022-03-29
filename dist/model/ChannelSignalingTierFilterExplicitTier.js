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
 * The ChannelSignalingTierFilterExplicitTier model module.
 * @module model/ChannelSignalingTierFilterExplicitTier
 * @version 0.0.0
 */
var ChannelSignalingTierFilterExplicitTier = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelSignalingTierFilterExplicitTier</code>.
   * Only one of [&#39;explicit_tier&#39;] may be set.
   * @alias module:model/ChannelSignalingTierFilterExplicitTier
   */
  function ChannelSignalingTierFilterExplicitTier() {
    _classCallCheck(this, ChannelSignalingTierFilterExplicitTier);

    ChannelSignalingTierFilterExplicitTier.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelSignalingTierFilterExplicitTier, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelSignalingTierFilterExplicitTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSignalingTierFilterExplicitTier} obj Optional instance to populate.
     * @return {module:model/ChannelSignalingTierFilterExplicitTier} The populated <code>ChannelSignalingTierFilterExplicitTier</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelSignalingTierFilterExplicitTier();

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return ChannelSignalingTierFilterExplicitTier;
}();
/**
 * @member {Array.<Number>} values
 */


ChannelSignalingTierFilterExplicitTier.prototype['values'] = undefined;
var _default = ChannelSignalingTierFilterExplicitTier;
exports["default"] = _default;