module.exports = {
  name: 'parseWithFrontmatter',

  args: {
    markdown: {
      example: '---\ntitle: Hello World\n---\n# Hello World',
      required: true
    }
  },

  call: function(args, done) {
    var parseMd = require('..').parse;
    var parseYaml = require('@inappcloud/stack-yaml').parse;
    var rFrontMatter = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/;
    var result = { frontmatter: null, content: null };

    var match = args.markdown.match(rFrontMatter);

    parseYaml({ yaml: match[2] }).then(function(v) {
      result.frontmatter = v;
      return parseMd({ markdown: (match[3] || '') });
    }).then(function(v) {
      result.content = v;
      done(result);
    }).catch(function(err) {
      done(err);
    });
  }
};
