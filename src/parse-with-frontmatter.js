module.exports = {
  name: 'parseWithFrontmatter',
  args: {
    markdown: {
      example: 'title: Hello World\n---\n# Hello World',
      required: true
    }
  },

  call: function(args, done, error) {
    var markdown = require('..');
    var yaml = require('@inappcloud/stack-yaml');
    var rFrontMatter = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/;

    var match = args.markdown.match(rFrontMatter);

    yaml.parse({}, { yaml: match[2], output: 'yaml' }).then(function(c) {
      return markdown.parse(c, { markdown: (match[3] || ''), output: 'markdown' });
    }).then(function(c) {
      done({ frontmatter: c.yaml, content: c.markdown });
    }).catch(function(err) {
      error(err);
    });
  }
};
