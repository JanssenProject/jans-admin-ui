/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
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
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.AppConfigurationClientAuthenticationFilters();
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

  describe('AppConfigurationClientAuthenticationFilters', function() {
    it('should create an instance of AppConfigurationClientAuthenticationFilters', function() {
      // uncomment below and update the code to test AppConfigurationClientAuthenticationFilters
      //var instane = new JansConfigApi.AppConfigurationClientAuthenticationFilters();
      //expect(instance).to.be.a(JansConfigApi.AppConfigurationClientAuthenticationFilters);
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instane = new JansConfigApi.AppConfigurationClientAuthenticationFilters();
      //expect(instance).to.be();
    });

    it('should have the property bind (base name: "bind")', function() {
      // uncomment below and update the code to test the property bind
      //var instane = new JansConfigApi.AppConfigurationClientAuthenticationFilters();
      //expect(instance).to.be();
    });

    it('should have the property bindPasswordAttribute (base name: "bind-password-attribute")', function() {
      // uncomment below and update the code to test the property bindPasswordAttribute
      //var instane = new JansConfigApi.AppConfigurationClientAuthenticationFilters();
      //expect(instance).to.be();
    });

    it('should have the property baseDn (base name: "base-dn")', function() {
      // uncomment below and update the code to test the property baseDn
      //var instane = new JansConfigApi.AppConfigurationClientAuthenticationFilters();
      //expect(instance).to.be();
    });

  });

}));