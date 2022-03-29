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
 * The ChannelPackagingMp2t model module.
 * @module model/ChannelPackagingMp2t
 * @version 0.0.0
 */
var ChannelPackagingMp2t = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingMp2t</code>.
   * Uses MP2T format for each segments. Only one of [&#39;mp2t&#39;, &#39;mp4&#39;] may be set.
   * @alias module:model/ChannelPackagingMp2t
   */
  function ChannelPackagingMp2t() {
    _classCallCheck(this, ChannelPackagingMp2t);

    ChannelPackagingMp2t.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingMp2t, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingMp2t</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingMp2t} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingMp2t} The populated <code>ChannelPackagingMp2t</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingMp2t();

        if (data.hasOwnProperty('force_unmuxed_audio')) {
          obj['force_unmuxed_audio'] = _ApiClient["default"].convertToType(data['force_unmuxed_audio'], 'Boolean');
        }

        if (data.hasOwnProperty('insert_id3_utc_time')) {
          obj['insert_id3_utc_time'] = _ApiClient["default"].convertToType(data['insert_id3_utc_time'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingMp2t;
}();
/**
 * Forces the Video and Audio Encodings to be unmuxed when there is one audio encodings. This setting will have to be uniformed across MP2T packagers within a config. When there are two or more audio encodings, unmuxed will be used automatically.
 * @member {Boolean} force_unmuxed_audio
 */


ChannelPackagingMp2t.prototype['force_unmuxed_audio'] = undefined;
/**
 * If true, insert ID3 tags that include a UTC timestamp. This is a Turner/WM-specific extension.
 * @member {Boolean} insert_id3_utc_time
 */

ChannelPackagingMp2t.prototype['insert_id3_utc_time'] = undefined;
var _default = ChannelPackagingMp2t;
exports["default"] = _default;