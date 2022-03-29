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
 * The ChannelIngestSlate model module.
 * @module model/ChannelIngestSlate
 * @version 0.0.0
 */
var ChannelIngestSlate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelIngestSlate</code>.
   * Slate configures default slating behavior.
   * @alias module:model/ChannelIngestSlate
   */
  function ChannelIngestSlate() {
    _classCallCheck(this, ChannelIngestSlate);

    ChannelIngestSlate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelIngestSlate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelIngestSlate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelIngestSlate} obj Optional instance to populate.
     * @return {module:model/ChannelIngestSlate} The populated <code>ChannelIngestSlate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelIngestSlate();

        if (data.hasOwnProperty('source_loss_url')) {
          obj['source_loss_url'] = _ApiClient["default"].convertToType(data['source_loss_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelIngestSlate;
}();
/**
 * Source loss URL defines the location of the TS file to play when no source is available. It must have one audio and one video stream. Either MPEG2 or H.264 can be used.
 * @member {String} source_loss_url
 */


ChannelIngestSlate.prototype['source_loss_url'] = undefined;
var _default = ChannelIngestSlate;
exports["default"] = _default;