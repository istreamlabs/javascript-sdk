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
 * The ChannelIngestSourceAudioSources model module.
 * @module model/ChannelIngestSourceAudioSources
 * @version 0.0.0
 */
var ChannelIngestSourceAudioSources = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelIngestSourceAudioSources</code>.
   * @alias module:model/ChannelIngestSourceAudioSources
   */
  function ChannelIngestSourceAudioSources() {
    _classCallCheck(this, ChannelIngestSourceAudioSources);

    ChannelIngestSourceAudioSources.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelIngestSourceAudioSources, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelIngestSourceAudioSources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelIngestSourceAudioSources} obj Optional instance to populate.
     * @return {module:model/ChannelIngestSourceAudioSources} The populated <code>ChannelIngestSourceAudioSources</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelIngestSourceAudioSources();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('selector')) {
          obj['selector'] = _ApiClient["default"].convertToType(data['selector'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelIngestSourceAudioSources;
}();
/**
 * @member {String} id
 */


ChannelIngestSourceAudioSources.prototype['id'] = undefined;
/**
 * RFC 5646, e.g. 'en' 'en-US'
 * @member {String} language
 */

ChannelIngestSourceAudioSources.prototype['language'] = undefined;
/**
 * Language fiendly name, e.g. 'English', 'Spanish'
 * @member {String} name
 */

ChannelIngestSourceAudioSources.prototype['name'] = undefined;
/**
 * Expression for choosing an audio track in the stream for this AudioSource https://istreamplanet.atlassian.net/wiki/spaces/T/pages/847970791/Proposal+Audio+Track+Selection
 * @member {String} selector
 */

ChannelIngestSourceAudioSources.prototype['selector'] = undefined;
var _default = ChannelIngestSourceAudioSources;
exports["default"] = _default;