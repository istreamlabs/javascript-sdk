"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelIngest = _interopRequireDefault(require("./ChannelIngest"));

var _ChannelPackaging = _interopRequireDefault(require("./ChannelPackaging"));

var _ChannelPublishing = _interopRequireDefault(require("./ChannelPublishing"));

var _ChannelSignaling = _interopRequireDefault(require("./ChannelSignaling"));

var _ChannelTags = _interopRequireDefault(require("./ChannelTags"));

var _ChannelTranscode = _interopRequireDefault(require("./ChannelTranscode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Channel model module.
 * @module model/Channel
 * @version 0.0.0
 */
var Channel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Channel</code>.
   * @alias module:model/Channel
   * @param ingest {module:model/ChannelIngest} 
   * @param transcode {module:model/ChannelTranscode} 
   */
  function Channel(ingest, transcode) {
    _classCallCheck(this, Channel);

    Channel.initialize(this, ingest, transcode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Channel, null, [{
    key: "initialize",
    value: function initialize(obj, ingest, transcode) {
      obj['ingest'] = ingest;
      obj['transcode'] = transcode;
    }
    /**
     * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Channel} obj Optional instance to populate.
     * @return {module:model/Channel} The populated <code>Channel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Channel();

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('ingest')) {
          obj['ingest'] = _ChannelIngest["default"].constructFromObject(data['ingest']);
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], ['String']);
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('packaging')) {
          obj['packaging'] = _ChannelPackaging["default"].constructFromObject(data['packaging']);
        }

        if (data.hasOwnProperty('publishing')) {
          obj['publishing'] = _ChannelPublishing["default"].constructFromObject(data['publishing']);
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('resource_class')) {
          obj['resource_class'] = _ApiClient["default"].convertToType(data['resource_class'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('signaling')) {
          obj['signaling'] = _ChannelSignaling["default"].constructFromObject(data['signaling']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ChannelTags["default"].constructFromObject(data['tags']);
        }

        if (data.hasOwnProperty('transcode')) {
          obj['transcode'] = _ChannelTranscode["default"].constructFromObject(data['transcode']);
        }
      }

      return obj;
    }
  }]);

  return Channel;
}();
/**
 * Date and time the channel was created.
 * @member {Date} created
 */


Channel.prototype['created'] = undefined;
/**
 * External Channel ID provided at channel creation time
 * @member {String} id
 */

Channel.prototype['id'] = undefined;
/**
 * @member {module:model/ChannelIngest} ingest
 */

Channel.prototype['ingest'] = undefined;
/**
 * Optional labels for a channel. Any included labels must be at least 1 character long, but no greater than 256 characters. The maximum number of labels is 10.
 * @member {Array.<String>} labels
 */

Channel.prototype['labels'] = undefined;
/**
 * Date and time the channel was last modified.
 * @member {Date} modified
 */

Channel.prototype['modified'] = undefined;
/**
 * A friendly human-readable name for the channel. This will get displayed in user interfaces.
 * @member {String} name
 */

Channel.prototype['name'] = undefined;
/**
 * @member {module:model/ChannelPackaging} packaging
 */

Channel.prototype['packaging'] = undefined;
/**
 * @member {module:model/ChannelPublishing} publishing
 */

Channel.prototype['publishing'] = undefined;
/**
 * Region represents the general geolocation for transcoding and stream egress from iStreamPlanet. If no region is provided at channel creation time, then 'US_WEST' is used.
 * @member {module:model/Channel.RegionEnum} region
 */

Channel.prototype['region'] = undefined;
/**
 * If the ResourceClass is unspecified the channel will default to run in the 'DYNAMIC' ResourceClass. Note that changing the ResourceClass for a running channel is supported and will be performed with no downtime.
 * @member {module:model/Channel.ResourceClassEnum} resource_class
 */

Channel.prototype['resource_class'] = undefined;
/**
 * Self link for the channel.
 * @member {String} self
 */

Channel.prototype['self'] = undefined;
/**
 * @member {module:model/ChannelSignaling} signaling
 */

Channel.prototype['signaling'] = undefined;
/**
 * @member {module:model/ChannelTags} tags
 */

Channel.prototype['tags'] = undefined;
/**
 * @member {module:model/ChannelTranscode} transcode
 */

Channel.prototype['transcode'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

Channel['RegionEnum'] = {
  /**
   * value: "US_WEST"
   * @const
   */
  "WEST": "US_WEST",

  /**
   * value: "US_EAST"
   * @const
   */
  "EAST": "US_EAST"
};
/**
 * Allowed values for the <code>resource_class</code> property.
 * @enum {String}
 * @readonly
 */

Channel['ResourceClassEnum'] = {
  /**
   * value: "DYNAMIC"
   * @const
   */
  "DYNAMIC": "DYNAMIC",

  /**
   * value: "STATIC"
   * @const
   */
  "STATIC": "STATIC"
};
var _default = Channel;
exports["default"] = _default;