"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelPublishingHlsPartialPresentations = _interopRequireDefault(require("./ChannelPublishingHlsPartialPresentations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelPublishingHls model module.
 * @module model/ChannelPublishingHls
 * @version 0.0.0
 */
var ChannelPublishingHls = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPublishingHls</code>.
   * HLS configures publication settings. Only one of HLS or DASH can be set.
   * @alias module:model/ChannelPublishingHls
   */
  function ChannelPublishingHls() {
    _classCallCheck(this, ChannelPublishingHls);

    ChannelPublishingHls.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPublishingHls, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPublishingHls</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPublishingHls} obj Optional instance to populate.
     * @return {module:model/ChannelPublishingHls} The populated <code>ChannelPublishingHls</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPublishingHls();

        if (data.hasOwnProperty('audio_only_variants')) {
          obj['audio_only_variants'] = _ApiClient["default"].convertToType(data['audio_only_variants'], 'String');
        }

        if (data.hasOwnProperty('gap_tags')) {
          obj['gap_tags'] = _ApiClient["default"].convertToType(data['gap_tags'], 'String');
        }

        if (data.hasOwnProperty('master_publish_frequency_secs')) {
          obj['master_publish_frequency_secs'] = _ApiClient["default"].convertToType(data['master_publish_frequency_secs'], 'Number');
        }

        if (data.hasOwnProperty('master_url_type')) {
          obj['master_url_type'] = _ApiClient["default"].convertToType(data['master_url_type'], 'String');
        }

        if (data.hasOwnProperty('media_url_type')) {
          obj['media_url_type'] = _ApiClient["default"].convertToType(data['media_url_type'], 'String');
        }

        if (data.hasOwnProperty('partial_presentations')) {
          obj['partial_presentations'] = _ApiClient["default"].convertToType(data['partial_presentations'], [_ChannelPublishingHlsPartialPresentations["default"]]);
        }

        if (data.hasOwnProperty('pdt_on_every_segment')) {
          obj['pdt_on_every_segment'] = _ApiClient["default"].convertToType(data['pdt_on_every_segment'], 'Boolean');
        }

        if (data.hasOwnProperty('signaling_formats')) {
          obj['signaling_formats'] = _ApiClient["default"].convertToType(data['signaling_formats'], ['String']);
        }

        if (data.hasOwnProperty('utc_in_segment_title')) {
          obj['utc_in_segment_title'] = _ApiClient["default"].convertToType(data['utc_in_segment_title'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ChannelPublishingHls;
}();
/**
 * Defines how audio only variant streams are included in the master playlist, where the variant streams are defined by #EXT-X-STREAM-INF tag, the tag attributes provide information about the Stream. If NOT_SET - honor the deprecated 'exclude_audio_only' flag. Later when the deprecated flag is removed, the NOT_SET would mean INCLUDE_DEFAULT The INCLUDE_DEFAULT option - only the default 'audio only variant stream' is included in master playlist. This is the most common use case. INCLUDE_NONE - no audio only variant streams are included in the master playlist, it replaces 'exclude_audio_only' setting. INCLUDE_ALL - include all audio only variant streams in the master playlist.
 * @member {module:model/ChannelPublishingHls.AudioOnlyVariantsEnum} audio_only_variants
 */


ChannelPublishingHls.prototype['audio_only_variants'] = undefined;
/**
 * Allows turning gap tags ON/OFF. When turned ON - the tag '#EXT-X-GAP' is inserted into media playlist for a missing segment. When turned OFF - Discontinuity is inserted into the playlist for missing segment(s). The default option UNDEFINED is mapped to OFF. Note: Gap tags are always inserted for the missing thumbnail segments independently of this setting
 * @member {module:model/ChannelPublishingHls.GapTagsEnum} gap_tags
 */

ChannelPublishingHls.prototype['gap_tags'] = undefined;
/**
 * How often the master playlist(s) should be published in seconds. A value of 0 means the master playlist will only be published once at channel start.
 * @member {Number} master_publish_frequency_secs
 */

ChannelPublishingHls.prototype['master_publish_frequency_secs'] = undefined;
/**
 * Allows specifying url type for HLS master playlists. If not provided, playlist generation will use 'RELATIVE'.
 * @member {module:model/ChannelPublishingHls.MasterUrlTypeEnum} master_url_type
 */

ChannelPublishingHls.prototype['master_url_type'] = undefined;
/**
 * Allows specifying url type for HLS media playlists. If not provided, playlist generation will use 'RELATIVE'.
 * @member {module:model/ChannelPublishingHls.MediaUrlTypeEnum} media_url_type
 */

ChannelPublishingHls.prototype['media_url_type'] = undefined;
/**
 * Specify which partial presentations should be used for this presentation. Partial presentations are additional master playlists that point to a subset of the parent presentation's media streams/variant playlists.
 * @member {Array.<module:model/ChannelPublishingHlsPartialPresentations>} partial_presentations
 */

ChannelPublishingHls.prototype['partial_presentations'] = undefined;
/**
 * When true a #EXT-X-PROGRAM-DATE-TIME tag will be placed on every media segment in media playlists. When false, the default behavior, the PDT tag is set according to the HLS specification.
 * @member {Boolean} pdt_on_every_segment
 */

ChannelPublishingHls.prototype['pdt_on_every_segment'] = undefined;
/**
 * Signaling formats specifies which SCTE-35 timeline marker formatting to use when rendering playlists.
 * @member {Array.<module:model/ChannelPublishingHls.SignalingFormatsEnum>} signaling_formats
 */

ChannelPublishingHls.prototype['signaling_formats'] = undefined;
/**
 * Include a UTC timestamp (that is equivalent in value to #EXT-X-PROGRAM-DATE-TIME) in the title of each media segment in media playlists. Ex. #EXTINF:6.006,LTC=2020-01-01T12:00:00.000Z
 * @member {Boolean} utc_in_segment_title
 */

ChannelPublishingHls.prototype['utc_in_segment_title'] = undefined;
/**
 * Allowed values for the <code>audio_only_variants</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingHls['AudioOnlyVariantsEnum'] = {
  /**
   * value: "INCLUDE_DEFAULT"
   * @const
   */
  "DEFAULT": "INCLUDE_DEFAULT",

  /**
   * value: "INCLUDE_NONE"
   * @const
   */
  "NONE": "INCLUDE_NONE",

  /**
   * value: "INCLUDE_ALL"
   * @const
   */
  "ALL": "INCLUDE_ALL"
};
/**
 * Allowed values for the <code>gap_tags</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingHls['GapTagsEnum'] = {
  /**
   * value: "ON"
   * @const
   */
  "ON": "ON",

  /**
   * value: "OFF"
   * @const
   */
  "OFF": "OFF"
};
/**
 * Allowed values for the <code>master_url_type</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingHls['MasterUrlTypeEnum'] = {
  /**
   * value: "RELATIVE"
   * @const
   */
  "RELATIVE": "RELATIVE",

  /**
   * value: "ABSOLUTE"
   * @const
   */
  "ABSOLUTE": "ABSOLUTE",

  /**
   * value: "HOST_RELATIVE"
   * @const
   */
  "HOST_RELATIVE": "HOST_RELATIVE"
};
/**
 * Allowed values for the <code>media_url_type</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingHls['MediaUrlTypeEnum'] = {
  /**
   * value: "RELATIVE"
   * @const
   */
  "RELATIVE": "RELATIVE",

  /**
   * value: "ABSOLUTE"
   * @const
   */
  "ABSOLUTE": "ABSOLUTE",

  /**
   * value: "HOST_RELATIVE"
   * @const
   */
  "HOST_RELATIVE": "HOST_RELATIVE"
};
/**
 * Allowed values for the <code>signalingFormats</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPublishingHls['SignalingFormatsEnum'] = {
  /**
   * value: "MDIALOG"
   * @const
   */
  "MDIALOG": "MDIALOG",

  /**
   * value: "FREEWHEEL"
   * @const
   */
  "FREEWHEEL": "FREEWHEEL",

  /**
   * value: "ADOBE_SIMPLE"
   * @const
   */
  "ADOBE_SIMPLE": "ADOBE_SIMPLE",

  /**
   * value: "ADOBE_SCTE35"
   * @const
   */
  "ADOBE_SCTE35": "ADOBE_SCTE35",

  /**
   * value: "APPLE_SCTE35"
   * @const
   */
  "APPLE_SCTE35": "APPLE_SCTE35",

  /**
   * value: "AD_SIMPLE"
   * @const
   */
  "AD_SIMPLE": "AD_SIMPLE",

  /**
   * value: "SCTE35"
   * @const
   */
  "SCTE35": "SCTE35",

  /**
   * value: "SCTE35_2019"
   * @const
   */
  "SCTE35_2019": "SCTE35_2019",

  /**
   * value: "SCTE35_2019_EVERY_SEGMENT"
   * @const
   */
  "SCTE35_2019_EVERY_SEGMENT": "SCTE35_2019_EVERY_SEGMENT"
};
var _default = ChannelPublishingHls;
exports["default"] = _default;