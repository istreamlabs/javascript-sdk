"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelIngestSourceAudioSources = _interopRequireDefault(require("./ChannelIngestSourceAudioSources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelIngestSource model module.
 * @module model/ChannelIngestSource
 * @version 0.0.0
 */
var ChannelIngestSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelIngestSource</code>.
   * Source provides a reference to the input media stream for this channel.
   * @alias module:model/ChannelIngestSource
   */
  function ChannelIngestSource() {
    _classCallCheck(this, ChannelIngestSource);

    ChannelIngestSource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelIngestSource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelIngestSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelIngestSource} obj Optional instance to populate.
     * @return {module:model/ChannelIngestSource} The populated <code>ChannelIngestSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelIngestSource();

        if (data.hasOwnProperty('audio_sources')) {
          obj['audio_sources'] = _ApiClient["default"].convertToType(data['audio_sources'], [_ChannelIngestSourceAudioSources["default"]]);
        }

        if (data.hasOwnProperty('captions_source')) {
          obj['captions_source'] = _ApiClient["default"].convertToType(data['captions_source'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelIngestSource;
}();
/**
 * @member {Array.<module:model/ChannelIngestSourceAudioSources>} audio_sources
 */


ChannelIngestSource.prototype['audio_sources'] = undefined;
/**
 * Closed captions source embedding. If unspecified, defaults to ATSC_A53.
 * @member {module:model/ChannelIngestSource.CaptionsSourceEnum} captions_source
 */

ChannelIngestSource.prototype['captions_source'] = undefined;
/**
 * Unique identifier for this source.
 * @member {String} id
 */

ChannelIngestSource.prototype['id'] = undefined;
/**
 * Self link for the source.
 * @member {String} self
 */

ChannelIngestSource.prototype['self'] = undefined;
/**
 * Allowed values for the <code>captions_source</code> property.
 * @enum {String}
 * @readonly
 */

ChannelIngestSource['CaptionsSourceEnum'] = {
  /**
   * value: "ATSC_A53"
   * @const
   */
  "ATSC_A53": "ATSC_A53",

  /**
   * value: "SMPTE_2038"
   * @const
   */
  "SMPTE_2038": "SMPTE_2038"
};
var _default = ChannelIngestSource;
exports["default"] = _default;