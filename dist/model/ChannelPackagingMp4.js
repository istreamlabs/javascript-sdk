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
 * The ChannelPackagingMp4 model module.
 * @module model/ChannelPackagingMp4
 * @version 0.0.0
 */
var ChannelPackagingMp4 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingMp4</code>.
   * Uses MP4 format for each segments. Only one of [&#39;mp2t&#39;, &#39;mp4&#39;] may be set.
   * @alias module:model/ChannelPackagingMp4
   */
  function ChannelPackagingMp4() {
    _classCallCheck(this, ChannelPackagingMp4);

    ChannelPackagingMp4.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingMp4, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingMp4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingMp4} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingMp4} The populated <code>ChannelPackagingMp4</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingMp4();

        if (data.hasOwnProperty('caption_placement')) {
          obj['caption_placement'] = _ApiClient["default"].convertToType(data['caption_placement'], 'String');
        }

        if (data.hasOwnProperty('insert_pssh_box')) {
          obj['insert_pssh_box'] = _ApiClient["default"].convertToType(data['insert_pssh_box'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingMp4;
}();
/**
 * CaptionPlacement defines where caption messages should be placed in the output MP4.
 * @member {module:model/ChannelPackagingMp4.CaptionPlacementEnum} caption_placement
 */


ChannelPackagingMp4.prototype['caption_placement'] = undefined;
/**
 * Insert pssh boxes generated by content protection into packaged segments. Defaults to not insert pssh boxes to the packaged segments.
 * @member {Boolean} insert_pssh_box
 */

ChannelPackagingMp4.prototype['insert_pssh_box'] = undefined;
/**
 * Allowed values for the <code>caption_placement</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPackagingMp4['CaptionPlacementEnum'] = {
  /**
   * value: "SEI_PAYLOAD"
   * @const
   */
  "SEI_PAYLOAD": "SEI_PAYLOAD",

  /**
   * value: "CLCP_TRACK"
   * @const
   */
  "CLCP_TRACK": "CLCP_TRACK"
};
var _default = ChannelPackagingMp4;
exports["default"] = _default;