var assert = require('assert');
// var suite = require('mocha').suite;
var test = require('mocha').test;
var markdown = require('..');

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

test('.toHtml', function(done) {
  var testCases = [
    {
      args: { markdown: '# Hello', output: 'markdown' },
      output: '<h1 id="hello">Hello</h1>\n'
    }
  ];

  testCases.forEach(function(testCase) {
    markdown.toHtml({}, testCase.args).then(function(ctx) {
      assert.equal(ctx.markdown, testCase.output);
      done();
    });
  });
});
