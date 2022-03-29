"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelIngestSlate = _interopRequireDefault(require("./ChannelIngestSlate"));

var _PutChannelRequestIngestSource = _interopRequireDefault(require("./PutChannelRequestIngestSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PutChannelRequestIngest model module.
 * @module model/PutChannelRequestIngest
 * @version 0.0.0
 */
var PutChannelRequestIngest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PutChannelRequestIngest</code>.
   * Ingest configures inputs for the transcoder.
   * @alias module:model/PutChannelRequestIngest
   * @param source {module:model/PutChannelRequestIngestSource} 
   */
  function PutChannelRequestIngest(source) {
    _classCallCheck(this, PutChannelRequestIngest);

    PutChannelRequestIngest.initialize(this, source);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PutChannelRequestIngest, null, [{
    key: "initialize",
    value: function initialize(obj, source) {
      obj['source'] = source;
    }
    /**
     * Constructs a <code>PutChannelRequestIngest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutChannelRequestIngest} obj Optional instance to populate.
     * @return {module:model/PutChannelRequestIngest} The populated <code>PutChannelRequestIngest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PutChannelRequestIngest();

        if (data.hasOwnProperty('slate')) {
          obj['slate'] = _ChannelIngestSlate["default"].constructFromObject(data['slate']);
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _PutChannelRequestIngestSource["default"].constructFromObject(data['source']);
        }
      }

      return obj;
    }
  }]);

  return PutChannelRequestIngest;
}();
/**
 * @member {module:model/ChannelIngestSlate} slate
 */


PutChannelRequestIngest.prototype['slate'] = undefined;
/**
 * @member {module:model/PutChannelRequestIngestSource} source
 */

PutChannelRequestIngest.prototype['source'] = undefined;
var _default = PutChannelRequestIngest;
exports["default"] = _default;