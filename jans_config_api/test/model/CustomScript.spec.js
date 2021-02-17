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
    instance = new JansConfigApi.CustomScript();
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

  describe('CustomScript', function() {
    it('should create an instance of CustomScript', function() {
      // uncomment below and update the code to test CustomScript
      //var instane = new JansConfigApi.CustomScript();
      //expect(instance).to.be.a(JansConfigApi.CustomScript);
    });

    it('should have the property dn (base name: "dn")', function() {
      // uncomment below and update the code to test the property dn
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property inum (base name: "inum")', function() {
      // uncomment below and update the code to test the property inum
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property script (base name: "script")', function() {
      // uncomment below and update the code to test the property script
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property scriptType (base name: "scriptType")', function() {
      // uncomment below and update the code to test the property scriptType
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property programmingLanguage (base name: "programmingLanguage")', function() {
      // uncomment below and update the code to test the property programmingLanguage
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property moduleProperties (base name: "moduleProperties")', function() {
      // uncomment below and update the code to test the property moduleProperties
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property configurationProperties (base name: "configurationProperties")', function() {
      // uncomment below and update the code to test the property configurationProperties
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property scriptError (base name: "scriptError")', function() {
      // uncomment below and update the code to test the property scriptError
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

    it('should have the property internal (base name: "internal")', function() {
      // uncomment below and update the code to test the property internal
      //var instance = new JansConfigApi.CustomScript();
      //expect(instance).to.be();
    });

  });

}));
