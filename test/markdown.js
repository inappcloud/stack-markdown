var assert = require('assert');
var test = require('mocha').test;
var markdown = require('..');

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
