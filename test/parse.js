var testCases = [
  {
    name: 'parse',
    args: { markdown: '# Hello' },
    output: '<h1 id="hello">Hello</h1>\n'
  },
  {
    name: 'parse#noargs',
    args: {},
    output: 'error'
  }
];

require('@inappcloud/stack-test').runTests(require('..').parse, testCases);
