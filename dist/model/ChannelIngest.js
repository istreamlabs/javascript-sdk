"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelIngestSlate = _interopRequireDefault(require("./ChannelIngestSlate"));

var _ChannelIngestSource = _interopRequireDefault(require("./ChannelIngestSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ChannelIngest model module.
 * @module model/ChannelIngest
 * @version 0.0.0
 */
var ChannelIngest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelIngest</code>.
   * Ingest configures inputs for the transcoder.
   * @alias module:model/ChannelIngest
   * @param source {module:model/ChannelIngestSource} 
   */
  function ChannelIngest(source) {
    _classCallCheck(this, ChannelIngest);

    ChannelIngest.initialize(this, source);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelIngest, null, [{
    key: "initialize",
    value: function initialize(obj, source) {
      obj['source'] = source;
    }
    /**
     * Constructs a <code>ChannelIngest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelIngest} obj Optional instance to populate.
     * @return {module:model/ChannelIngest} The populated <code>ChannelIngest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelIngest();

        if (data.hasOwnProperty('slate')) {
          obj['slate'] = _ChannelIngestSlate["default"].constructFromObject(data['slate']);
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ChannelIngestSource["default"].constructFromObject(data['source']);
        }
      }

      return obj;
    }
  }]);

  return ChannelIngest;
}();
/**
 * @member {module:model/ChannelIngestSlate} slate
 */


ChannelIngest.prototype['slate'] = undefined;
/**
 * @member {module:model/ChannelIngestSource} source
 */

ChannelIngest.prototype['source'] = undefined;
var _default = ChannelIngest;
exports["default"] = _default;