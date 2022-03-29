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
 * The ChannelPublishingLive2vod model module.
 * @module model/ChannelPublishingLive2vod
 * @version 0.0.0
 */
var ChannelPublishingLive2vod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingLive2vod</code>.
   * Live2VOD configuration used to archive the channel data, this allows clip creation after the content is no longer live.
   * @alias module:model/ChannelPublishingLive2vod
   */
  function ChannelPublishingLive2vod() {
    _classCallCheck(this, ChannelPublishingLive2vod);

    ChannelPublishingLive2vod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingLive2vod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingLive2vod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingLive2vod} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingLive2vod} The populated <code>ChannelPublishingLive2vod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingLive2vod();

        if (data.hasOwnProperty('product_id')) {
          obj['product_id'] = _ApiClient["default"].convertToType(data['product_id'], 'String');
        }

        if (data.hasOwnProperty('retention_days')) {
          obj['retention_days'] = _ApiClient["default"].convertToType(data['retention_days'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingLive2vod;
}();
/**
 * Product ID that VODs will be associated with in the Live2VOD system. The value of this ID is pre-configured in the Live2VOD portal.
 * @member {String} product_id
 */


ChannelPublishingLive2vod.prototype['product_id'] = undefined;
/**
 * Specifies the retention time, in days, for archived content.
 * @member {Number} retention_days
 */

ChannelPublishingLive2vod.prototype['retention_days'] = undefined;
var _default = ChannelPublishingLive2vod;
exports["default"] = _default;