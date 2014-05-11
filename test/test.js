/*!
 * varname <https://github.com/jonschlinkert/varname
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License (MIT)
 */

var expect = require('chai').expect;
var varname = require('../');


describe('varname', function () {
  describe('when a basic one-word string is passed', function () {
    it('should return the string as-is', function () {
      var actual = varname('foo');
      var expected = 'foo';
      expect(actual).to.eql(expected);
    });
  });

  describe('when a two-word name separated by hyphens is passed', function () {
    it('should return a camel-case version of the name', function () {
      var actual = varname('foo-bar');
      var expected = 'fooBar';
      expect(actual).to.eql(expected);
    });
  });


  describe('when a malformed name is passed', function () {
    it('should return a camel-case version of the name', function () {
      var actual = varname('this is a test - _');
      var expected = 'thisIsATest';
      expect(actual).to.eql(expected);
    });

    it('should return a camel-case version of the name', function () {
      var actual = varname('_this is a test - _');
      var expected = 'thisIsATest';
      expect(actual).to.eql(expected);
    });

    it('should return a camel-case version of the name', function () {
      var actual = varname('_this&&&is a test - _');
      var expected = 'thisIsATest';
      expect(actual).to.eql(expected);
    });
  });
});
