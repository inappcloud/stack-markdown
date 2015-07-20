var fn = require('@inappcloud/stack').fn;
var parse = require('./src/parse');
var parseWithFrontmatter = require('./src/parse-with-frontmatter');

module.exports = {
  parse: fn(parse),
  parseWithFrontmatter: fn(parseWithFrontmatter)
};
