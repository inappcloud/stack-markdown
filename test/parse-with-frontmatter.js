var testCases = [
  {
    name: 'parseWithFrontmatter',
    args: { markdown: '---\ntitle: Hello World\n---\n# Hello' },
    output: { frontmatter: { title: 'Hello World' }, content: '<h1 id="hello">Hello</h1>\n' }
  },
  {
    name: 'parseWithFrontmatter#noargs',
    args: {},
    output: 'error'
  }
];

require('@inappcloud/stack-test').runTests(require('..').parseWithFrontmatter, testCases);
