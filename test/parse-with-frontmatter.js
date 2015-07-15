var assert = require('assert');
var test = require('mocha').test;
var markdown = require('..');

var testCases = [
  {
    name: 'parseWithFrontmatter',
    args: { markdown: 'title: Hello World\n---\n# Hello', output: 'markdown' },
    output: { frontmatter: { title: 'Hello World' }, content: '<h1 id="hello">Hello</h1>\n' }
  },
  {
    name: 'parseWithFrontmatter#noargs',
    args: {},
    output: 'error'
  }
];

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    markdown.parseWithFrontmatter({}, testCase.args).then(function(ctx) {
      if (testCase.output !== 'error') {
        assert.equal(ctx[testCase.args.output], testCase.output);
        done();
      } else {
        done(new Error('Function should have returned an error'));
      }
    }).catch(function(ctx) {
      if (testCase.output === 'error') {
        done();
      } else {
        done(ctx.error);
      }
    });
  });
});
