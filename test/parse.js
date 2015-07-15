var assert = require('assert');
var test = require('mocha').test;
var markdown = require('..');

var testCases = [
  {
    name: 'parse',
    args: { markdown: '# Hello', output: 'markdown' },
    output: '<h1 id="hello">Hello</h1>\n'
  },
  {
    name: 'parse#noargs',
    args: {},
    output: 'error'
  }
];

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    markdown.parse({}, testCase.args).then(function(ctx) {
      assert.equal(ctx.markdown, testCase.output);
      done();
    }).catch(function() {
      if (testCase.output === 'error') {
        done();
      }
    });
  });
});
