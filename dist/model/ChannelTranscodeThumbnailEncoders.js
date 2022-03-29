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
 * The ChannelTranscodeThumbnailEncoders model module.
 * @module model/ChannelTranscodeThumbnailEncoders
 * @version 0.0.0
 */
var ChannelTranscodeThumbnailEncoders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelTranscodeThumbnailEncoders</code>.
   * @alias module:model/ChannelTranscodeThumbnailEncoders
   */
  function ChannelTranscodeThumbnailEncoders() {
    _classCallCheck(this, ChannelTranscodeThumbnailEncoders);

    ChannelTranscodeThumbnailEncoders.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelTranscodeThumbnailEncoders, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelTranscodeThumbnailEncoders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelTranscodeThumbnailEncoders} obj Optional instance to populate.
     * @return {module:model/ChannelTranscodeThumbnailEncoders} The populated <code>ChannelTranscodeThumbnailEncoders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelTranscodeThumbnailEncoders();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ChannelTranscodeThumbnailEncoders;
}();
/**
 * Height specifies the thumbnail image height in pixels.
 * @member {Number} height
 */


ChannelTranscodeThumbnailEncoders.prototype['height'] = undefined;
/**
 * Encoder ID. IDs must be unique for all video and thumbnail encoders. This ID is referenced when setting up playlist publishing.
 * @member {String} id
 */

ChannelTranscodeThumbnailEncoders.prototype['id'] = undefined;
/**
 * Width specifies the thumbnail image width in pixels.
 * @member {Number} width
 */

ChannelTranscodeThumbnailEncoders.prototype['width'] = undefined;
var _default = ChannelTranscodeThumbnailEncoders;
exports["default"] = _default;