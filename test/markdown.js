var assert = require('assert');
var test = require('mocha').test;
var markdown = require('..');

var testCases = [
  {
    name: 'toHtml',
    args: { markdown: '# Hello', output: 'markdown' },
    output: '<h1 id="hello">Hello</h1>\n'
  },
  {
    name: 'toHtml#noargs',
    args: {},
    output: 'error'
  }
];

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    markdown.toHtml({}, testCase.args).then(function(ctx) {
      assert.equal(ctx.markdown, testCase.output);
      done();
    }).catch(function() {
      if (testCase.output === 'error') {
        done();
      }
    });
  });
});
