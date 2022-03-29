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
 * The ChannelPublishingClosedCaptionStreams model module.
 * @module model/ChannelPublishingClosedCaptionStreams
 * @version 0.0.0
 */
var ChannelPublishingClosedCaptionStreams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingClosedCaptionStreams</code>.
   * @alias module:model/ChannelPublishingClosedCaptionStreams
   */
  function ChannelPublishingClosedCaptionStreams() {
    _classCallCheck(this, ChannelPublishingClosedCaptionStreams);

    ChannelPublishingClosedCaptionStreams.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingClosedCaptionStreams, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingClosedCaptionStreams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingClosedCaptionStreams} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingClosedCaptionStreams} The populated <code>ChannelPublishingClosedCaptionStreams</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingClosedCaptionStreams();

        if (data.hasOwnProperty('auto_select')) {
          obj['auto_select'] = _ApiClient["default"].convertToType(data['auto_select'], 'String');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingClosedCaptionStreams;
}();
/**
 * Indicates that the client should play the captioning media selection group if the user has not indicated a user preference. If both auto_select and default are not set, the first captioning media selection group will be used.
 * @member {module:model/ChannelPublishingClosedCaptionStreams.AutoSelectEnum} auto_select
 */


ChannelPublishingClosedCaptionStreams.prototype['auto_select'] = undefined;
/**
 * Configures the captioning media selection group that will be played if the user has not indicated a user preference. If both auto_select and default are not set, the first captioning media selection group will be used.
 * @member {module:model/ChannelPublishingClosedCaptionStreams.DefaultEnum} default
 */

ChannelPublishingClosedCaptionStreams.prototype['default'] = undefined;
/**
 * Language code as RFC 5646, e.g. 'en' 'en-US'.
 * @member {String} language
 */

ChannelPublishingClosedCaptionStreams.prototype['language'] = undefined;
/**
 * Source stream name.
 * @member {String} name
 */

ChannelPublishingClosedCaptionStreams.prototype['name'] = undefined;
/**
 * Allowed values for the <code>auto_select</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingClosedCaptionStreams['AutoSelectEnum'] = {
  /**
   * value: "NO"
   * @const
   */
  "NO": "NO",

  /**
   * value: "YES"
   * @const
   */
  "YES": "YES"
};
/**
 * Allowed values for the <code>default</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingClosedCaptionStreams['DefaultEnum'] = {
  /**
   * value: "NO"
   * @const
   */
  "NO": "NO",

  /**
   * value: "YES"
   * @const
   */
  "YES": "YES"
};
var _default = ChannelPublishingClosedCaptionStreams;
exports["default"] = _default;