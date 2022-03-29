"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelSignalingTierFilterExplicitTier = _interopRequireDefault(require("./ChannelSignalingTierFilterExplicitTier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelSignalingTierFilter model module.
 * @module model/ChannelSignalingTierFilter
 * @version 0.0.0
 */
var ChannelSignalingTierFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelSignalingTierFilter</code>.
   * Specifies how to filter the provided segments, when received through in-band SCTE-35, based on the SCTE-35 SpliceInfoSection Tier.
   * @alias module:model/ChannelSignalingTierFilter
   */
  function ChannelSignalingTierFilter() {
    _classCallCheck(this, ChannelSignalingTierFilter);

    ChannelSignalingTierFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelSignalingTierFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelSignalingTierFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSignalingTierFilter} obj Optional instance to populate.
     * @return {module:model/ChannelSignalingTierFilter} The populated <code>ChannelSignalingTierFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelSignalingTierFilter();

        if (data.hasOwnProperty('explicit_tier')) {
          obj['explicit_tier'] = _ChannelSignalingTierFilterExplicitTier["default"].constructFromObject(data['explicit_tier']);
        }
      }

      return obj;
    }
  }]);

  return ChannelSignalingTierFilter;
}();
/**
 * @member {module:model/ChannelSignalingTierFilterExplicitTier} explicit_tier
 */


ChannelSignalingTierFilter.prototype['explicit_tier'] = undefined;
var _default = ChannelSignalingTierFilter;
exports["default"] = _default;