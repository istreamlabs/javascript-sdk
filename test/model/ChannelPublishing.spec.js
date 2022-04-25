/**
 * iStreamPlanet Channels API
 * This API provides a way to list, create, and run channels.  Channels consist of inputs (ingest), transcoding settings like codecs and bitrates, and outputs (publishing).  List calls use cursor-based pagination with [RFC 5988](https://tools.ietf.org/html/rfc5988) Link headers. Clients *should* read this header and follow the next link to read all pages of results. 
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: support@istreamplanet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Isp);
  }
}(this, function(expect, Isp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Isp.ChannelPublishing();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChannelPublishing', function() {
    it('should create an instance of ChannelPublishing', function() {
      // uncomment below and update the code to test ChannelPublishing
      //var instance = new Isp.ChannelPublishing();
      //expect(instance).to.be.a(Isp.ChannelPublishing);
    });

    it('should have the property closedCaptionStreams (base name: "closed_caption_streams")', function() {
      // uncomment below and update the code to test the property closedCaptionStreams
      //var instance = new Isp.ChannelPublishing();
      //expect(instance).to.be();
    });

    it('should have the property featureFlags (base name: "feature_flags")', function() {
      // uncomment below and update the code to test the property featureFlags
      //var instance = new Isp.ChannelPublishing();
      //expect(instance).to.be();
    });

    it('should have the property live2vod (base name: "live2vod")', function() {
      // uncomment below and update the code to test the property live2vod
      //var instance = new Isp.ChannelPublishing();
      //expect(instance).to.be();
    });

    it('should have the property publications (base name: "publications")', function() {
      // uncomment below and update the code to test the property publications
      //var instance = new Isp.ChannelPublishing();
      //expect(instance).to.be();
    });

  });

}));
