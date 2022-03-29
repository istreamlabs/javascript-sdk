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
 * The ChannelPackagingContentProtectionBulkFile model module.
 * @module model/ChannelPackagingContentProtectionBulkFile
 * @version 0.0.0
 */
var ChannelPackagingContentProtectionBulkFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPackagingContentProtectionBulkFile</code>.
   * Only one of [&#39;bulk_file&#39;, &#39;sample_aes&#39;, &#39;common&#39;] may be set.
   * @alias module:model/ChannelPackagingContentProtectionBulkFile
   */
  function ChannelPackagingContentProtectionBulkFile() {
    _classCallCheck(this, ChannelPackagingContentProtectionBulkFile);

    ChannelPackagingContentProtectionBulkFile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPackagingContentProtectionBulkFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPackagingContentProtectionBulkFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelPackagingContentProtectionBulkFile} obj Optional instance to populate.
     * @return {module:model/ChannelPackagingContentProtectionBulkFile} The populated <code>ChannelPackagingContentProtectionBulkFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPackagingContentProtectionBulkFile();

        if (data.hasOwnProperty('iv_rotation')) {
          obj['iv_rotation'] = _ApiClient["default"].convertToType(data['iv_rotation'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPackagingContentProtectionBulkFile;
}();
/**
 * How often the IV should be rotated and how it should be created
 * @member {module:model/ChannelPackagingContentProtectionBulkFile.IvRotationEnum} iv_rotation
 */


ChannelPackagingContentProtectionBulkFile.prototype['iv_rotation'] = undefined;
/**
 * Allowed values for the <code>iv_rotation</code> property.
 * @enum {String}
 * @readonly
 */

ChannelPackagingContentProtectionBulkFile['IvRotationEnum'] = {
  /**
   * value: "RANDOM_PER_KEY"
   * @const
   */
  "RANDOM_PER_KEY": "RANDOM_PER_KEY",

  /**
   * value: "PER_SEGMENT_NUMBER"
   * @const
   */
  "PER_SEGMENT_NUMBER": "PER_SEGMENT_NUMBER",

  /**
   * value: "UNIQUE_PER_SEGMENT"
   * @const
   */
  "UNIQUE_PER_SEGMENT": "UNIQUE_PER_SEGMENT"
};
var _default = ChannelPackagingContentProtectionBulkFile;
exports["default"] = _default;