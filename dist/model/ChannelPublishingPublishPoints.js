"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPublishingHttp = _interopRequireDefault(require("./ChannelPublishingHttp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPublishingPublishPoints model module.
 * @module model/ChannelPublishingPublishPoints
 * @version 0.0.0
 */
var ChannelPublishingPublishPoints = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingPublishPoints</code>.
   * @alias module:model/ChannelPublishingPublishPoints
   */
  function ChannelPublishingPublishPoints() {
    _classCallCheck(this, ChannelPublishingPublishPoints);

    ChannelPublishingPublishPoints.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingPublishPoints, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingPublishPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingPublishPoints} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingPublishPoints} The populated <code>ChannelPublishingPublishPoints</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingPublishPoints();

        if (data.hasOwnProperty('http')) {
          obj['http'] = _ChannelPublishingHttp["default"].constructFromObject(data['http']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('playlist_only_for')) {
          obj['playlist_only_for'] = _ApiClient["default"].convertToType(data['playlist_only_for'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingPublishPoints;
}();
/**
 * @member {module:model/ChannelPublishingHttp} http
 */


ChannelPublishingPublishPoints.prototype['http'] = undefined;
/**
 * uniquely identifies this publish_point within a channel configuration. Can be referenced by other publish_points in the 'playlist_only_for' field.
 * @member {String} id
 */

ChannelPublishingPublishPoints.prototype['id'] = undefined;
/**
 * playlist_only_for identifies the id of the publish_point that has the segments for this publish_point, which is only publishing a playlist for those segments. All publish_points within a publication must either have 'playlist_only_for' all set or all not set.
 * @member {String} playlist_only_for
 */

ChannelPublishingPublishPoints.prototype['playlist_only_for'] = undefined;
var _default = ChannelPublishingPublishPoints;
exports["default"] = _default;