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
    factory(root.expect, root.IStreamPlanetChannelsApi);
  }
}(this, function(expect, IStreamPlanetChannelsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IStreamPlanetChannelsApi.Channel();
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

  describe('Channel', function() {
    it('should create an instance of Channel', function() {
      // uncomment below and update the code to test Channel
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be.a(IStreamPlanetChannelsApi.Channel);
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property ingest (base name: "ingest")', function() {
      // uncomment below and update the code to test the property ingest
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property packaging (base name: "packaging")', function() {
      // uncomment below and update the code to test the property packaging
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property publishing (base name: "publishing")', function() {
      // uncomment below and update the code to test the property publishing
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property resourceClass (base name: "resource_class")', function() {
      // uncomment below and update the code to test the property resourceClass
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property self (base name: "self")', function() {
      // uncomment below and update the code to test the property self
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property signaling (base name: "signaling")', function() {
      // uncomment below and update the code to test the property signaling
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

    it('should have the property transcode (base name: "transcode")', function() {
      // uncomment below and update the code to test the property transcode
      //var instance = new IStreamPlanetChannelsApi.Channel();
      //expect(instance).to.be();
    });

  });

}));