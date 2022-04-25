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
    instance = new Isp.ChannelIngestSource();
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

  describe('ChannelIngestSource', function() {
    it('should create an instance of ChannelIngestSource', function() {
      // uncomment below and update the code to test ChannelIngestSource
      //var instance = new Isp.ChannelIngestSource();
      //expect(instance).to.be.a(Isp.ChannelIngestSource);
    });

    it('should have the property audioSources (base name: "audio_sources")', function() {
      // uncomment below and update the code to test the property audioSources
      //var instance = new Isp.ChannelIngestSource();
      //expect(instance).to.be();
    });

    it('should have the property captionsSource (base name: "captions_source")', function() {
      // uncomment below and update the code to test the property captionsSource
      //var instance = new Isp.ChannelIngestSource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Isp.ChannelIngestSource();
      //expect(instance).to.be();
    });

    it('should have the property self (base name: "self")', function() {
      // uncomment below and update the code to test the property self
      //var instance = new Isp.ChannelIngestSource();
      //expect(instance).to.be();
    });

  });

}));
